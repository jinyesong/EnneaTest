// let innerPage = 1;
// radioBtn이 눌리는 이벤트 감지할때마다 현재 inner_(num)페이지의 name = question1,2,3,4,5가 모두 선택이 되었는지 확인
// 모두 선택이 되었다면 innerPage +1 한 inner페이지를 block으로 설정하고 그 전페이지를 none으로 설정

let innerPage = 1;
let isTrue = [0,0,0,0,0];
let questionNum = 7; //일단 7이상으로 초기화
let pageNum = 1; // chapter내의 page가 몇번째 페이지인지 저장. 일단 0으로 초기화
let chapterNum = document.getElementsByClassName("chapterPage")[0].id.substr(-1);
//하트 위치 초기화
let progressBar = document.getElementById("progress");
let heartPX = 5;
if(chapterNum == 2){
    if(isMobile()){
        heartPX += 235;
    }
    else{
        heartPX += 100;
    }
}
else if(chapterNum == 3){
    if(isMobile()){
        heartPX += 480;
    }
    else{
        heartPX += 205;
    }
}
$(".heartImg").css("left", heartPX+"px");
let heartMoveNum = 20; //하트이미지 움직이는 정도

if(isMobile()=="true"){
    console.log("yes it is mobile");
    let chapDiv = document.getElementById("chapterPage_"+chapterNum);
    chapDiv.style.width = "fit-content";
    chapDiv.style.height = "fit-content";
    chapDiv.style.top = "50%";
    chapDiv.style.transform = "translateY(-50%)"
    let chapImg = document.getElementById("chapimg");
    let chap_url = "../image/chapter" + chapterNum + "_mb.png";
    chapImg.src = chap_url;
    chapImg.style.width = "100%";
    chapImg.style.height = "auto";
    let nextBtn = document.getElementById("nextBtn");
    nextBtn.style.width = "140px";
    nextBtn.style.right = "110px";
    document.getElementsByTagName("body")[0].style.textAlign = "unset";
}

document.getElementById("nextBtn").addEventListener("click", function(){
    document.getElementById("back"+ chapterNum).style.display = "block";
    document.getElementsByClassName("chapterPage")[0].style.display = "none";
    
    if(isMobile()=="true" || isMobile()=="iPad") {
        // let temp_url = "../image/part" + chapterNum + "_001" + "_mb.png";
        // let bckimg = document.getElementById("backimg"+ chapterNum);
        // bckimg.src = temp_url;
        // bckimg.style.width = "95%";
        // bckimg.style.height = "90%";
        // bckimg.style.marginTop = "50px";

        //하트바 모바일 초기화
        let heartImg = document.getElementById("heartImg"+chapterNum);
        heartImg.style.width = "100px";
        let progressDiv = document.getElementById("processBar");
        progressDiv.style.width = "90%";
        progressBar.style.width = "100%";
        progressBar.style.height = "30px";
        progressBar.style.marginTop = "75px";
        // progressBar.style.top = "10%";
        heartMoveNum = 43;

        let qbox = document.getElementsByClassName("questionBox");
        for ( let i = 0; i < qbox.length; i++) {
            qbox[i].style.height = "225px";
        }
        let inr = document.getElementsByClassName("inner");
        for ( let i = 0; i < inr.length; i++) {
            // inr[i].style.marginTop = "110px";
            // inr[i].style.left = "47.5%";
        }
        for( let i = 1; i < 6; i++ ) {
            let chki = document.getElementsByClassName("check"+i);
            for ( let j = 0; j < chki.length; j++) {
                chki[j].style.height = "90px";
                chki[j].style.width = "90px";
                chki[j].style.marginInline = "33px";
            }
        }
        console.log("change style 90%");
    } else {
        console.log("desktop");
        var temp_h5 = document.getElementsByTagName("h5");
        for (var i = 0; i < temp_h5.length; i ++) {
            temp_h5[i].style.fontSize = "0.83em";
        }
        var temp_h6 = document.getElementsByTagName("h6");
        for (var i = 0; i < temp_h6.length; i ++) {
            temp_h6[i].style.fontSize = "0.67em";
        }
        // let temp_url = "../image/part" + chapterNum + "_00" + pageNum + ".png"
        // document.getElementById("backimg"+ chapterNum).src = temp_url;
    }
});

document.getElementById("back"+ chapterNum).addEventListener("click", function(e){
    if(e.target.tagName == "INPUT"){ //라디오버튼이 클릭되었을 때
        let clicked = e.target.name.substr(-1);
        let score = e.target.className.substr(-1);
        isTrue[clicked-1] = score;

        if(!isTrue.includes(0)){ //라디오버튼이 모두 체크되었을 때
            //세션스토리지에 저장
            for(let i=0; i<questionNum-2; i++){
                let QNum = (innerPage-1)*5 + i + 1;
                checkEnnea_Nsum(chapterNum, QNum, isTrue[i]);
            }
            pageNum = pageNum + 1
            if(questionNum < 7){ //마지막 inner일때
                if(chapterNum == 3){
                    //결과페이지로 이동
                    location.href = "../result/result.html";
                }
                else{
                    chapterNum++;
                    location.href = "chapter" + chapterNum + ".html";
                }
            } else { // inner가 마지막이 아닐때
                //하트바 게이지 증가
                progressBar.value = progressBar.value + 5.55;
                heartPX += heartMoveNum;
                $(".heartImg").css("left", heartPX+"px");

                if(isMobile()=="true") {
                    console.log("yes it is mobile");
                    let temp_url = "../image/part" + chapterNum + "_00" + pageNum + "_mb.png"
                    // document.getElementById("backimg"+ chapterNum).src = temp_url;
                } else {
                    console.log("desktop or iPad");
                    console.log(pageNum);
                    let temp_url = "../image/part" + chapterNum + "_00" + pageNum +".png"
                    // document.getElementById("backimg"+ chapterNum).src = temp_url;
                    if (isMobile()=="iPad"){
                        console.log("iPad");
                    }
                }
            }
            document.getElementById("inner_"+innerPage).style.display = "none";
            innerPage++;
            //다음 inner_(num)의 question수 세기
            questionNum = document.getElementById("inner_"+innerPage).childElementCount;
            isTrue = new Array(questionNum-2).fill(0); //배열 초기화 왜그런지 모르겠지만 -2해줘야 맞음
            document.getElementById("inner_"+innerPage).style.display = "block";
            // alert(questionNum);
            if (questionNum != 7) {
                document.getElementById("inner_"+innerPage).style.left = "50%";
                document.getElementById("inner_"+innerPage).style.height = "80%";
                console.log("go 80");
                if(isMobile()=="true"){
                    document.getElementById("inner_"+innerPage).style.height = "60%";
                    console.log("mobile so go 60");
                }
                // document.getElementById("inner_"+innerPage).style.position = "absolute";
                // document.getElementById("inner_"+innerPage).style.transform = "translateY(-320px)";                
            }
        }
    }
})

chapter_enneaNum = {
    1: [2, 3, 6, 3, 9, 3, 6, 5, 7, 7, 5, 9, 6, 5, 3, 6, 1, 9, 8, 7, 3, 9, 1],
    2: [3, 2, 8, 2, 3, 8, 2, 3, 8, 2, 2, 5, 8, 6, 5, 6, 7, 7, 1, 9, 8, 2, 4, 8, 7, 1, 3],
    3: [4, 2, 4, 5, 1, 9, 2, 4, 7, 1, 7, 6, 5, 8, 4, 7, 5, 6, 4, 5, 8, 4, 6, 9, 4, 1, 4, 1, 9, 1, 9]
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

// 추가된 부분
function isMobile() {
    console.log("mobile?");
    // ipad인지 확인하고 img 및 비율 변경
    console.log(/iPad/i.test(navigator.userAgent));
    if(/iPad/i.test(navigator.userAgent)) {
        console.log(/iPad/i.test(navigator.userAgent));
        document.getElementById("chapimg").style.height = "100%"
        console.log("mobile?");
        document.getElementById("nextBtn").style.transform = "translateX(-60px)";
        document.getElementById("nextBtn").style.width = "95px";
        console.log("mobile?");
        return "iPad";
    }

    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent).toString();
}
// 추가부분 끝