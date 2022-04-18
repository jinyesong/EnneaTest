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
resultImg.src = `../image/result${resultEnnea}.jpg`;
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