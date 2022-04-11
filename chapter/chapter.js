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
document.getElementById("back").addEventListener("click", function(e){
    if(e.target.tagName == "INPUT"){ //라디오버튼이 클릭되었을 때
        let clicked = e.target.name.substr(-1);
        let score = e.target.className.substr(-1);
        isTrue[clicked-1] = score;

        if(!isTrue.includes(0)){ //라디오버튼이 모두 체크되었을 때
            if(questionNum < 7){ //마지막 inner일때
                let chapterNum = document.getElementsByClassName("chapterPage")[0].id.substr(-1);
                if(chapterNum == 3){
                    //결과페이지로 이동
                }
                chapterNum++;
                location.href = "chapter" + chapterNum++ + ".html";
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