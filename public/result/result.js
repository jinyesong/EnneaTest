let max = 0;
let EnneaArr = new Array(9);
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
resultImg.id = `resultMainImg`;
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
    name: sessionStorage.getItem("name"),
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
db.collection("User").add(data).then((result) => {
    console.log("디비 저장!");
}).catch((err) => {
    console.log("저장 실패" + err);
});

//다시하기 버튼
document.getElementById("againBtn").addEventListener("click", function(){
    sessionStorage.clear();
})

if(isMobile()=="true") {
  let loadingGif = document.getElementById("loadingGif");
  loadingGif.src = "../image/loading_mb.gif";
  loadingGif.style.width = "100%";
  loadingGif.style.height = "100%";
  let resultImgDiv = document.getElementById("resultImg");
  resultImgDiv.style.width = "fit-content";
  resultImgDiv.style.height = "fit-content";
  resultImgDiv.style.position = "relative";
  let resultImg = document.getElementById("resultMainImg");
  resultImg.style.width = "100%";
  let secondImg = document.getElementById("second_Ennea");
  let thirdImg = document.getElementById("third_Ennea");
  secondImg.style.width = "25%";
  thirdImg.style.width = "25%";
  secondImg.style.top = "28%";
  thirdImg.style.top = "28%";
  secondImg.style.left = "32%";
  thirdImg.style.left = "42%";
  let bool1 = document.getElementById("boo1");
  let bool2 = document.getElementById("boo2");
  bool1.style.fontSize = "30px";
  bool2.style.fontSize = "30px";
  bool1.style.top = "36%";
  bool2.style.top = "36%";
  bool1.style.left = "32%";
  bool2.style.left = "42%";
  let name = document.getElementById("name");
  name.style.fontSize = "38px";
  name.style.top = "38%";
} else {
  document.getElementById("loading").style.height = "100%";
  document.getElementById("loading_video").style.heigth = "100%";
  console.log("change video height");
}

setTimeout(function(){
  document.getElementById("loading").style.display = "none";
  document.getElementById("resultImg").style.display = "block";
  document.getElementById("resultImg").style.display = "flex";
  document.getElementById("btnContainer").style.display = "block";
},2000);

//카카오 공유
let ResultImg = 'http://localhost:5000/image/'+resultEnnea+'.png'; //왜 이미지가 안뜨지 곤란
let ResultText = character[resultEnnea-1];
let SubText1 = character[Ennea2nd-1];
let SubText2 = character[Ennea3nd-1];

if (!Kakao.isInitialized()) { // init 체크
  Kakao.init('0bce43c810f40167012b02fd3553342d');
}
var sendKakao = function() {
  // 메시지 공유 함수
  Kakao.Link.sendScrap({
    requestUrl: 'http://localhost:5000/result/result.html', // 페이지 url
    templateId: 78079, // 메시지템플릿 번호
    templateArgs: {
      img: ResultImg, // 결과 이미지 주소 ${img}
      main: ResultText, // 본캐 이름 텍스트 ${main}
      sub_1: SubText1, // 부캐 이름 텍스트 ${sub_1}
      sub_2: SubText2 // 부캐 이름 텍스트 ${sub_2}
    },
  });
};

document.getElementById("kakaoShareBtn").addEventListener("click", function(){
  sendKakao();
});

function isMobile() {
  console.log("mobile?");
  // ipad인지 확인하고 img 및 비율 변경
  console.log(/iPad/i.test(navigator.userAgent));
  if(/iPad/i.test(navigator.userAgent)) {
      console.log(/iPad/i.test(navigator.userAgent));
      console.log("mobile?");
      return "iPad";
  }

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent).toString();
}