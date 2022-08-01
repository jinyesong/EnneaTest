
if(isMobile()=="true"){
  //시작페이지
  let body = document.getElementsByTagName("body")[0];
  body.style.display = "flex";

  let mainDiv = document.getElementById("page_container");
  mainDiv.style.width = "100%";

  let mainInner = document.getElementById("inner_element_container");
  mainInner.style.width = "100%";

  let mainGif = document.getElementById("mainGif");
  mainGif.style.width = "100%";

  let mainStart = document.getElementById("start");
  mainStart.style.width = "100%";


  //프롤로그
  let prologueDiv = document.getElementById("prologue");
  prologueDiv.style.height = "auto";

  let proGif =  document.getElementById("prologueGif");
  proGif.src = "/image/prologueVideo_mb.gif";
  proGif.style.width = "100%";

  let btn = document.getElementById("nextBtn");
  btn.style.top = "90%";
  btn.style.left = "80%";
}
if(isMobile()=="iPad") {
  let nbi = document.getElementById("nextBtn_img");
  nbi.style.width = "100px";
}
function isMobile() {
  // ipad인지 확인하고 img 및 비율 변경
  if(/iPad/i.test(navigator.userAgent)) {
      return "iPad";
  }
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent).toString();
}

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

let firebaseCount;
db.collection("NumberOfParticipants").get().then((snapshot)=>{
  snapshot.forEach((doc)=>{
    firebaseCount = doc.data().count;
    let htmlCount = document.getElementById("count");
    htmlCount.innerHTML = Number(firebaseCount)+7656;
  })
});

// nextBtn 클릭시 prologue페이지 등장 및 참여자 수 증가
document.getElementById("openBtn").addEventListener("click", function(){
  sessionStorage.clear();
  document.getElementById("page_container").style.display = "none";
  document.getElementById("prologue").style.display = "block";
  document.getElementById("prologue").style.display = "flex";

  let data = {
    count : Number(firebaseCount)+1
  }

  db.collection("NumberOfParticipants").doc("Count").update(data).then((result) => {
    console.log("디비 저장!");
    }).catch((err) => {
    console.log("저장 실패" + err);
  });

});