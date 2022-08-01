const firebaseConfig = {
    apiKey: "AIzaSyAETLy6EubnWcv2NARqyEKLIfC-rRBin3w",
    authDomain: "enneatest-b7cc9.firebaseapp.com",
    projectId: "enneatest-b7cc9",
    storageBucket: "enneatest-b7cc9.appspot.com",
    messagingSenderId: "918072804291",
    appId: "1:918072804291:web:52953c709becdbe7cfb376"
  };

let questionList = [
"Part 1. 가치관(신념,원칙)",
"1. 다른 사람들과 함께 일하는게 더 좋아",
"2. 많은 시간을 투자해서 내 능력을 발휘하고자 해",
"3. 무엇을 하든 늘 안전이 중요해",
"4. 사람보다 일의 목표를 중요하게 생각해",
"5. 사람들의 일은 각자의 몫이니 나와는 상관이 없다고 생각해",
"6. 오직 성공해야만 사랑 받을 수 있어",
"7. 명확한 지침이 있어야 일을 더 잘할 수 있어",
"8. 감정보다는 이성을 중요하게 생각해",
"9. 위험하더라도 도전적인 것을 즐길래! ",
"10. 다양한 일을 즐기고 늘 새로운 경험을 하고 싶어",
"11. 단체 생활보다는 내 생활에 대한 관심이 더 많아",
"12. 문제 상황 시 갈등을 피해 안전하게 해결하고 싶어",
"13. 충성할만한 사람이라면 얼마든지 따를 수 있어",
"14. 돈과 시간은 되도록 아끼지",
"15. 과정보다는 결과가 중요하다고 생각해",
"16. 친한 사람과 영원한 우정을 유지하려고 노력해",
"17. 원칙에 기초하여 행동하고자 해",
"18. 세상을 낙관적으로 바라보는 편이야",
"19. 언제나 강인해야 한다고 생각해 ",
"20. 끊임없이 변화하는 생활이 좋아!",
"21. 사람에 대한 배려보다는 일이 잘 되는게 중요하지",
"22. 모든 것이 조화롭고 평화롭게 흘러가면 좋겠어",
"23. 내 양심과 이성을 따르려고 해",
"Part 2. 실천(행동,표현)",
"1. 적응력이 좋아서 상황에 적절히 대응 할 수 있어",
"2. 다른 사람을 도와주는 것을 즐기곤 해",
"3. 사람들에게 지시하며 동기부여를 해주지",
"4. 사람들과 친해지려고 많이 노력하고 있어",
"5. 실패가 두려워서 부풀려 과장하는 편이야",
"6. 사람들을 통제하려고 해",
"7. 타인의 만족을 위해 노력하고 있어",
"8. 멈추지 않고 무언가를 끊임없이 하지",
"9. 강한 자신감으로 사람들을 설득하지",
"10. 주변 사람에 관심을 가지고 챙겨주려 해",
"11. 평소 주변에 호감을 얻기 위해 노력하고 있어",
"12. 무언가에 집중하여 예리하게 관찰해",
"13. 공격적이고 자기주장이 강해",
"14. 습관처럼 자연스럽게  내가 속한 집단에 헌신할 수 있어",
"15. 문제가 있으면 풀릴 때까지 그것만 생각해",
"16. 결과가 두려워 일을 질질 끄는 경우가 있어",
"17. 한 가지 일에 머물러 있기 어려워 해",
"18. 현실에 만족하지 않고 새로운 일을 찾아가지",
"19. 발전적으로 깊이 생각하고 행동하고 있어",
"20. 친구들과 편하게 마음을 터놓고 지내",
"21. 여럿이 결정을 내릴 때 주도해서 이끄는 편이야",
"22. 주변 사람들에게 칭찬을 잘해주지",
"23. 혼자서 나만의 특별한 취미를 즐기곤 하지",
"24. 다른 사람들이 말하기 어려워하는 것도 잘 말해",
"25. 스스로 재미있는 일을 찾아다니곤 하지 ",
"26. 규칙을 잘 지키고 엄격하지",
"27. 다른 사람들에게 지나친 경쟁을 요구하지",
"Part 3. 자아 정체성 속마음 마음의소리 등",
"1. 감성에 젖어서 혼자 있을때가 많아",
"2. 내 생각보다는 남의 생각에 공감할 때가 더 많아",
"3. 이방인처럼 소외감을 느낄때가 많아",
"4. 지적이고 냉철하게 관찰하는 스타일이야",
"5. 다른 사람보다 성실하고 책임감이 강해",
"6. 현재와 지금의 나에게 만족하는 편이야",
"7. 친구들이 나에게 의지할 때 기분이 좋아!",
"8. 다른 사람들보다 독특한 감정을 가지고 있어",
"9. 미래에 대해서 항상 열정적이지!",
"10. 정직하고 자제력이 있어 ",
"11. 자극적이고 두근거리는 활동이 좋아",
"12. 소중한 사람이라도 가끔은 의심하기도 해",
"13. 권위를 믿지 않고 규칙을 무시하곤 하지",
"14. 주변에 충분히 영향력이 있는 사람이지",
"15. 내 행동의 이유에 대해 회의감이 들 때가 있어",
"16. 아이처럼 명랑하고 순진해",
"17. 나를 둘러싼 세계를 이해하는 것에 관심이 많아",
"18. 주변으로부터 '너는 용기가 필요해' 라는 말을 들을 때가 있어",
"19. 분위기에 약하고 자기 생각에 잘 빠져",
"20. 머리로 모든 것을 이해하고 판단하지",
"21. 나의 리더십 점수는?",
"22. 감동 받다가도 혼자 우울해지기도 해",
"23. 내가 이룬 성공에 대해서도 가끔은 평가절하해",
"24. 감정기복이 적은 원만한 사람이야",
"25. 나는 낭만적이고 예술가의 자질이 있는 거 같아",
"26. 나는 다른 사람들의 신뢰를 얻을 수 있어",
"27. 비현실적인 몽상을 자주해",
"28. 정의감이 강하고 근면해",
"29. 사람들을 유쾌하고 편하게 대하는 스타일이야",
"30. 완벽을 위해 끝까지 참고 노력하는 스타일이야",
"31. 그냥 이유 없이 나를 좋아하는 사람이 많아"
];
chapter_enneaNum = {
    1: [2, 3, 6, 3, 9, 3, 6, 5, 7, 7, 5, 9, 6, 5, 3, 6, 1, 9, 8, 7, 3, 9, 1],
    2: [3, 2, 8, 2, 3, 8, 2, 3, 8, 2, 2, 5, 8, 6, 5, 6, 7, 7, 1, 9, 8, 2, 4, 8, 7, 1, 3],
    3: [4, 2, 4, 5, 1, 9, 2, 4, 7, 1, 7, 6, 5, 8, 4, 7, 5, 6, 4, 5, 8, 4, 6, 9, 4, 1, 4, 1, 9, 1, 9]
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
makeQuestionbar();
let getArr = new Array(); //처음에 목록을 받아와서 이후에 검색할 때 또 받아오지 않도록 저장해두는 배열
db.collection("User").orderBy('time', 'desc').get().then((snapshot)=>{
    snapshot.forEach((doc)=>{
        let arr = new Array(12);
        let date = new Date(doc.data().time*1000);
        let year = Number(date.getFullYear()-1969); //왜그런진 모르겠는데 년도가 3991로 나옴
        let month = ("0" + Number(date.getMonth()+1)).slice(-2);
        let day = ("0" + date.getDate()).slice(-2);
        let hour = ("0" + date.getHours()).slice(-2);
        let minute = ("0" + date.getMinutes()).slice(-2);
        arr[0] = year + "-" + month + "-" + day + " " + hour + ":" + minute;
        arr[1] = doc.data().name;
        arr[2] = doc.data().one;
        arr[3] = doc.data().two;
        arr[4] = doc.data().three;
        arr[5] = doc.data().four;
        arr[6] = doc.data().five;
        arr[7] = doc.data().six;
        arr[8] = doc.data().seven;
        arr[9] = doc.data().eight;
        arr[10] = doc.data().nine;
        arr[11] = doc.id; //getArr 마지막 요소로 문서 id 추가
        arr[12] = doc.data().allScore; // 진짜 마지막 요소로 전체 score 데이터 추가
        // console.log(doc.data().allScore);
        getArr.push(arr);

        let TR = document.createElement("tr");
        for(let i=0; i<11; i++){
            let TD = document.createElement("td");
            TD.innerHTML = arr[i];
            if(i == 1){
                TD.setAttribute("id", doc.id);
                TD.setAttribute("class", "title");
                TD.setAttribute("data-allScore", doc.data().allScore);
            }
            TR.appendChild(TD);
        }
        document.getElementById("tableBody").appendChild(TR);
    })
})

//검색 기능
document.getElementById("searchBtn").addEventListener("click", function(){
    let searchDate = document.getElementById("dateSearchBox").value;
    let searchName = document.getElementById("nameSearchBox").value;
    //let tbodyRow = document.getElementById("tableBody").getElementsByTagName("tr");
    if(searchDate === "" && searchName !== ""){ //이름으로만 검색
        $("#tableBody").empty(); //테이블 비우기
        for(let i=0; i<getArr.length; i++){
            if(getArr[i][1].includes(searchName)){ //왜 오류가날까->null문자열때문이었음
                let TR = document.createElement("tr");
                for(let j=0; j<11; j++){
                    let TD = document.createElement("td");
                    TD.innerHTML = getArr[i][j];
                    if(j == 1){
                        TD.setAttribute("id", getArr[i][11]);
                        TD.setAttribute("class", "title");
                        TD.setAttribute("data-allScore", getArr[i][12]);
                    }
                    TR.appendChild(TD);
                }
                document.getElementById("tableBody").appendChild(TR);
            }
        }
    }
    else if(searchName === "" && searchDate !== ""){ //날짜로만 검색
        $("#tableBody").empty(); //테이블 비우기
        console.log(searchDate) //2022-07-19 형식
        for(let i=0; i<getArr.length; i++){
            if(getArr[i][0].substr(0,10) == searchDate){
                let TR = document.createElement("tr");
                for(let j=0; j<11; j++){
                    let TD = document.createElement("td");
                    TD.innerHTML = getArr[i][j];
                    if(j == 1){
                        TD.setAttribute("id", getArr[i][11]);
                        TD.setAttribute("class", "title");
                        TD.setAttribute("data-allScore", getArr[i][12]);
                    }
                    TR.appendChild(TD);
                }
                document.getElementById("tableBody").appendChild(TR);
            }
        }
    }
    else if(searchName !== "" && searchDate !== ""){ //둘다 검색
        $("#tableBody").empty(); //테이블 비우기
        for(let i=0; i<getArr.length; i++){
            if(getArr[i][0].substr(0,10) == searchDate && getArr[i][1].includes(searchName)){
                let TR = document.createElement("tr");
                for(let j=0; j<11; j++){
                    let TD = document.createElement("td");
                    TD.innerHTML = getArr[i][j];
                    if(j == 1){
                        TD.setAttribute("id", getArr[i][11]);
                        TD.setAttribute("class", "title");
                        TD.setAttribute("data-allScore", getArr[i][12]);
                    }
                    TR.appendChild(TD);
                }
                document.getElementById("tableBody").appendChild(TR);
            }
        }
    }
    else{
        alert("날짜 혹은 이름을 입력해주세요.")
    }
});

//팝업 상세보기 기능
document.getElementById("tableBody").addEventListener("click", function(e){
    console.log(e.target.className);
    console.log(e.target.name);
    if(e.target.className == "title"){
        allScoreList = e.target.getAttribute("data-allScore").split(" ");
        if (allScoreList.length < 2) {
            // 과거 데이터를 누르면 맨 위에만 undifined로 뜨는데 딱히 고칠 필요를 못느껴서 둠.
            tempArray = document.getElementsByClassName("popup_score");
            for(var i = 0; i < tempArray.length; i++){
                tempArray[i].innerHTML = "";
            }
            alert("저장된 세부 항목별 애니어가 없는 데이터입니다");
        }
        else{
            document.getElementById("popupContainer").style.display = "block";
            for ( var i = 0; i < allScoreList.length; i++) {
                document.getElementsByClassName("popup_score")[i].innerHTML = " :  " + allScoreList[i];
            }
        }
    }
});

document.getElementById("popup_all").addEventListener("click", function(){
    showEnnea(0);
});

document.getElementById("popup_1").addEventListener("click", function(){
    showEnnea(1);
});
document.getElementById("popup_2").addEventListener("click", function(){
    showEnnea(2);
});
document.getElementById("popup_3").addEventListener("click", function(){
    showEnnea(3);
});
document.getElementById("popup_4").addEventListener("click", function(){
    showEnnea(4);
});
document.getElementById("popup_5").addEventListener("click", function(){
    showEnnea(5);
});
document.getElementById("popup_6").addEventListener("click", function(){
    showEnnea(6);
});
document.getElementById("popup_7").addEventListener("click", function(){
    showEnnea(7);
});
document.getElementById("popup_8").addEventListener("click", function(){
    showEnnea(8);
});
document.getElementById("popup_9").addEventListener("click", function(){
    showEnnea(9);
});

document.getElementById("popup_cancel").addEventListener("click", function(){
    showEnnea(0);
    document.getElementById("popupContainer").style.display = "none";
});


function showEnnea (num) { // num에 해당하는 애니어를 block, 나머지는 none처리. 0이 들어오면 다 block시킴
    var tempArray = [];
    for (var j = 1; j < 10; j++) {
        if ( j==num || num == 0){
            tempArray = document.getElementsByClassName(j);
            for(var i = 0; i < tempArray.length; i++){
                tempArray[i].style.display = "";
            }
        }
        else {
            tempArray = document.getElementsByClassName(j);
            for(var i = 0; i < tempArray.length; i++){
                tempArray[i].style.display = "none";
            }
        }
    }
}

function makeQuestionbar() {
    var chapter_enneaNumlength = [ 0, 23, 27, 31];
    tempChapterNum = "0"
    tempMinusLength = 1;
    for(var i = 0; i < questionList.length; i++) {
        if (( (i == 0) | (i == chapter_enneaNumlength[1]+1)) | (i == chapter_enneaNumlength[1] + 2 + chapter_enneaNumlength[2])) {
            // chapter 1 2 3 의 <p> 가 나와야 할 때를 예외처리
            var tempP = document.createElement("h3");
            var tempTextnode = document.createTextNode(questionList[i]);
            if ( i != 0 ) {
                tempMinusLength = tempMinusLength + chapter_enneaNumlength[tempChapterNum] + 1;
            }
            tempChapterNum = questionList[i][5]; // chapter가 1인지 2인지 3인지 가져와줌
            console.log(chapter_enneaNumlength[tempChapterNum]);
            tempP.appendChild(tempTextnode);
            document.getElementById("popupContainer").appendChild(tempP);
            document.getElementById("popupContainer").innerHTML = document.getElementById("popupContainer").innerHTML + "<br>"
        }
        else {
            // 문항을 popupContainer에 넣음
            tempP = document.createElement("label");
            tempTextnode = document.createTextNode(questionList[i]);

            tempP.appendChild(tempTextnode); // 라벨에 문항 넣기

            // class명을 popup question과 해당 문항의 애니어로 설정해줌
            tempP.setAttribute("class", "popup_question " + chapter_enneaNum[tempChapterNum][i - tempMinusLength]); // i 에서 이전 챕터길이를 빼주어 챕터별 index에 접근하도록 한다
            document.getElementById("popupContainer").appendChild(tempP);

            mini_tempP = document.createElement("label");
            mini_tempP.setAttribute("class", "popup_score " + chapter_enneaNum[tempChapterNum][i - tempMinusLength]);
            tempP.appendChild(mini_tempP);
            // 줄바꿈 추가
            document.getElementById("popupContainer").innerHTML = document.getElementById("popupContainer").innerHTML + "<br class=" + chapter_enneaNum[tempChapterNum][i - tempMinusLength] + ">"
        }
    }
}
