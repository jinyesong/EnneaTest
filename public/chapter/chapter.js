document.getElementById("nextBtn").addEventListener("click", function(){
    document.getElementById("back").style.display = "block";
    document.getElementsByClassName("chapterPage")[0].style.display = "none";
});

// let innerPage = 1;
// radioBtn이 눌리는 이벤트 감지할때마다 현재 inner_(num)페이지의 name = question1,2,3,4,5가 모두 선택이 되었는지 확인
// 모두 선택이 되었다면 innerPage +1 한 inner페이지를 block으로 설정하고 그 전페이지를 none으로 설정

let innerPage = 1;
let isTrue = [0,0,0,0,0];
let questionNum = 7; //일단 7이상으로 초기화
let chapterNum = document.getElementsByClassName("chapterPage")[0].id.substr(-1);
document.getElementById("back").addEventListener("click", function(e){
    if(e.target.tagName == "INPUT"){ //라디오버튼이 클릭되었을 때
        let clicked = e.target.name.substr(-1);
        let score = e.target.className.substr(5, 1);
        isTrue[clicked-1] = score;

        if(!isTrue.includes(0)){ //라디오버튼이 모두 체크되었을 때
            //세션스토리지에 저장
            for(let i=0; i<questionNum-2; i++){
                let QNum = (innerPage-1)*5 + i + 1;
                checkEnnea_Nsum(chapterNum, QNum, isTrue[i]);
            }
            if(questionNum < 7){ //마지막 inner일때
                if(chapterNum == 3){
                    //결과페이지로 이동
                    location.href = "../result/result.html";
                }
                else{
                    chapterNum++;
                    location.href = "chapter" + chapterNum + ".html";
                }
            }
            document.getElementById("inner_"+innerPage).style.display = "none";
            innerPage++;
            //다음 inner_(num)의 question수 세기
            questionNum = document.getElementById("inner_"+innerPage).childElementCount;
            isTrue = new Array(questionNum-2).fill(0); //배열 초기화 왜그런지 모르겠지만 -2해줘야 맞음
            document.getElementById("inner_"+innerPage).style.display = "block";
        }
    }
})

chapter_enneaNum = {
    1: [2, 3, 3, 3, 3, 3, 6, 5, 7, 7, 5, 7, 6, 5, 6, 6, 1, 9, 8, 9, 9, 9, 1],
    2: [3, 2, 4, 2, 3, 2, 2, 3, 3, 2, 2, 5, 7, 6, 5, 6, 7, 7, 1, 9, 8, 8, 8, 8, 8, 1, 8],
    3: [4, 2, 4, 4, 4, 4, 2, 4, 4, 4, 7, 6, 5, 6, 5, 7, 5, 6, 7, 5, 8, 9, 8, 9, 1, 1, 1, 1, 9, 1, 9]
}

function checkEnnea_Nsum(chapter, question_num, val) {
    session_key = chapter_enneaNum[chapter][question_num-1];
    if(sessionStorage.getItem(session_key) === "null"){
        sessionStorage.setItem(session_key, val);
    }
    else{
        val = Number(sessionStorage.getItem(session_key)) + Number(val);
        sessionStorage.setItem(session_key, val);
    }
}

// chapterPage 한글자씩 나타내기
let tyInt;
let typingBool = false;
let typingIdx = 0; //문장 안의 글자 인덱스
let typingPIdx = 0; //한 문장
let typingText = $(".typing-txt").text();
typingText = typingText.split(",");
for(let i=0; i<typingText.length; i++){
    typingText[i] = typingText[i].split("");
}
if(typingBool == false){
    typingBool = true;
    tyInt = setInterval(typing, 100); //반복
}

function typing(){
    if(typingIdx < typingText[typingPIdx].length && typingPIdx < 5){
        if(typingIdx == 0){
            let b = `<b>${typingText[typingPIdx][typingIdx]}</b>`
            $("#typing" + Number(typingPIdx+1)).append(b);
        }
        else{
            $("#typing" + Number(typingPIdx+1)).append(typingText[typingPIdx][typingIdx]);
        }
        typingIdx++;
    }
    else if(typingIdx == typingText[typingPIdx].length && typingPIdx < 5){
        typingPIdx++;
        typingIdx = 0;
        if(typingPIdx == 4){
            clearInterval(tyInt);
        }
    }
}