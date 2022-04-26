let max = 0;
var EnneaArr = {};
// let EnneaArr = new Array(9);
let resultEnnea;
let Ennea2nd;
let Ennea3nd;
const character = [
    "상견례 프리패서",
    "인간 댕댕이",
    "너만의 스타",
    "프로 감성러",
    "연애 계산기",
    "너바라기",
    "사랑의 조커",
    "나만 따라와 불도저",
    "사랑의 예스맨"
];

for(let i=1; i<10; i++){
    let val = Number(sessionStorage.getItem(i));
    EnneaArr[i-1] = val;
}
var sortable = [];
var temp = 1;
for (var name in EnneaArr) {
  sortable.push([temp, EnneaArr[name]]);
  temp = temp + 1;
}
sortable.sort(function(a, b) {
  return a[1] - b[1];
});
// 1 2 3위 애니어 숫자 불러오기
resultEnnea = sortable[8][0];
Ennea2nd = sortable[7][0];
Ennea3nd = sortable[6][0];

console.log(resultEnnea, Ennea2nd, Ennea3nd);
console.log(character[8]);

// 배경이미지와 2번째 3번째 애니어 이미지 삽입
var resultImg = document.createElement("img");
resultImg.src = `../image/result${resultEnnea}.png`;
document.getElementById("resultImg").appendChild(resultImg);

resultImg = document.createElement("img");
resultImg.src = `../image/${Ennea2nd}.png`;
resultImg.setAttribute("id", "second_Ennea");
document.getElementById("resultImg").appendChild(resultImg);

resultImg = document.createElement("img");
resultImg.src = `../image/${Ennea3nd}.png`;
resultImg.setAttribute("id", "third_Ennea");
document.getElementById("resultImg").appendChild(resultImg);

// 부캐1 부캐2 텍스트 추가 
var boo = document.getElementById("boo1");
console.log(sortable[7][0]);
boo.textContent = boo.textContent + character[sortable[7][0]-1];

boo = document.getElementById("boo2");
boo.textContent = boo.textContent + character[sortable[6][0]-1];

var n = document.getElementById("name");
n.textContent = sessionStorage.getItem("name") + "님을 위한 연애 비책";

// DB저장(name, date, ennea_result)
const firebaseConfig = {
    apiKey: "AIzaSyAETLy6EubnWcv2NARqyEKLIfC-rRBin3w",
    authDomain: "enneatest-b7cc9.firebaseapp.com",
    projectId: "enneatest-b7cc9",
    storageBucket: "enneatest-b7cc9.appspot.com",
    messagingSenderId: "918072804291",
    appId: "1:918072804291:web:52953c709becdbe7cfb376"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let data = {
    time : new Date(),
    one: EnneaArr[0],
    two: EnneaArr[1],
    three: EnneaArr[2],
    four: EnneaArr[3],
    five: EnneaArr[4],
    six: EnneaArr[5],
    seven: EnneaArr[6],
    eight: EnneaArr[7],
    nine: EnneaArr[8]
}
db.collection("User").doc(sessionStorage.getItem("name")).set(data).then((result) => {
    console.log("디비 저장!");
}).catch((err) => {
    console.log("저장 실패" + err);
});

//다시하기 버튼
document.getElementById("againBtn").addEventListener("click", function(){
    sessionStorage.clear();
})