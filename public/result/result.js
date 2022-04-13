let max = 0;
let EnneaArr = new Array(9);
let resultEnnea;
for(let i=1; i<10; i++){
    let val = Number(sessionStorage.getItem(i));
    EnneaArr[i-1] = val;
    if(max < val){
        max = val;
        resultEnnea = i;
    }
}
const resultImg = document.createElement("img");
resultImg.src = `../image/result${resultEnnea}.png`;
document.getElementById("resultImg").appendChild(resultImg);

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
    1: EnneaArr[0],
    2: EnneaArr[1],
    3: EnneaArr[2],
    4: EnneaArr[3],
    5: EnneaArr[4],
    6: EnneaArr[5],
    7: EnneaArr[6],
    8: EnneaArr[7],
    9: EnneaArr[8]
}
// db.collection("customer").doc(sessionStorage.getItem("name")).set(data).then((result) => {
//     console.log("디비 저장!");
//     resolve();
// }).catch((err) => {
//     console.log("저장 실패" + err);
//     reject("Database error");
// });

//다시하기 버튼
document.getElementById("againBtn").addEventListener("click", function(){
    sessionStorage.clear();
})