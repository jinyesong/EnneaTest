document.getElementById("nextBtn").addEventListener("click", function(){
    document.getElementById("back").style.display = "block";
    document.getElementsByClassName("chapterPage")[0].style.display = "none";
});
for(var i=1; i<10; i++){
    sessionStorage.setItem(i,"0");
}
// let innerPage = 1;
// radioBtn이 눌리는 이벤트 감지할때마다 현재 inner_(num)페이지의 name = question1,2,3,4,5가 모두 선택이 되었는지 확인
// 모두 선택이 되었다면 innerPage +1 한 inner페이지를 block으로 설정하고 그 전페이지를 none으로 설정

let innerPage = 1;
let isTrue = [0,0,0,0,0];
let questionNum = 7; //일단 7이상으로 초기화
let chapterNum = 1;

document.getElementById("back").addEventListener("click", function(e){
    if(e.target.tagName == "INPUT"){ //라디오버튼이 클릭되었을 때
        let clicked = e.target.name.substr(-1);
        let score = e.target.className.substr(-1);
        isTrue[clicked-1] = score;
        if(!isTrue.includes(0)){ //라디오버튼이 모두 체크되었을 때
            //세션스토리지에 저장
            for(let i=0; i<questionNum; i++){
                if(i > 4) {
                    break; // i가 8까지 올라감;; i가 5 이상이면 break
                }
                
                let QNum = (innerPage-1)*5 + i + 1; // QNum이 6부터 시작해서 innerPage - 1해줌.
                // 그럼에도 불구하고 한 챕터의 마지막 문제를 읽을때 QNum을 넘쳐 생각하는 경우가있음
                console.log(innerPage);
                console.log(QNum);
                checkEnnea_Nsum(chapterNum, QNum, parseInt(isTrue[i]));
            }
            if(questionNum < 7){ //마지막 inner일때
                storeToJSON();
                chapterNum = document.getElementsByClassName("chapterPage")[0].id.substr(-1);
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

chapter_enneaNum = {
    ch1: [2, 3, 3, 3, 3, 3, 6, 5, 7, 7, 5, 7, 6, 5, 6, 6, 1, 9, 8, 9, 9, 9, 1],
    ch2: [3, 2, 4, 2, 3, 2, 2, 3, 3, 2, 2, 5, 7, 6, 5, 6, 7, 7, 1, 9, 8, 8, 8, 8, 8, 1, 8],
    ch3: [4, 2, 4, 4, 4, 4, 2, 4, 4, 4, 7, 6, 5, 6, 5, 7, 5, 6, 7, 5, 8, 9, 8, 9, 1, 1, 1, 1, 9, 1, 9]
}



function checkEnnea_Nsum(chapter, question_num, val) {
    alert(String(chapter_enneaNum["ch1"][question_num-1]) + " " + String(val));
    if(chapter == 1) {
        var before_val = sessionStorage.getItem(chapter_enneaNum["ch1"][question_num-1])
        sessionStorage.setItem(chapter_enneaNum["ch1"][question_num-1], parseInt(before_val)+val)
    }
    else if(chapter == 2) {
        var before_val = sessionStorage.getItem(chapter_enneaNum["ch2"][question_num-1])
        sessionStorage.setItem(chapter_enneaNum["ch2"][question_num-1], parseInt(before_val)+val)
    }
    else if(chapter == 3) {
        var before_val = sessionStorage.getItem(chapter_enneaNum["ch3"][question_num-1])
        sessionStorage.setItem(chapter_enneaNum["ch3"][question_num-1], parseInt(before_val)+val)
    }
}

let ary = {
    ennea1: 0, ennea2: 0, ennea3: 0, ennea4: 0, ennea5: 0, ennea6: 0, ennea7: 0, ennea8: 0, ennea9: 0
}

function storeToJSON() {
    const fs = require('fs');
    fs.exists('enneaResult.JSON', function(exists) {
        if(exists) {
            fs.readFile('user.json', (err, data) => { 
                // 파일 읽기 
                if (err) throw err 
                const ennea_sum = JSON.parse(data) 
                // json.parse로 파싱 
                
                ennea_sum.ennea1 = sessionStorage.getItem(1);
                ennea_sum.ennea2 = sessionStorage.getItem(2);
                ennea_sum.ennea3 = sessionStorage.getItem(3);
                ennea_sum.ennea4 = sessionStorage.getItem(4);
                ennea_sum.ennea5 = sessionStorage.getItem(5);
                ennea_sum.ennea6 = sessionStorage.getItem(6);
                ennea_sum.ennea7 = sessionStorage.getItem(7);
                ennea_sum.ennea8 = sessionStorage.getItem(8);
                ennea_sum.ennea9 = sessionStorage.getItem(9);

                let json = JSON.stringify(ennea_sum);
                fs.writeFile('myjsonfile.json', json);
            })
        } else {
            console.log("file not exists");
            
            let json = JSON.stringify(ary);
            fs.writeFile('myjsonfile.json', json);
        }
    });
}