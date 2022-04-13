let key;
let val;
let max = 0;
let resultEnnea;
for(let i=1; i<10; i++){
    key = i;
    val = Number(sessionStorage.getItem(i));
    if(max < val){
        max = val;
        resultEnnea = i;
    }
}
const resultImg = document.createElement("img");
resultImg.src = `../image/result${resultEnnea}.png`;
document.getElementById("resultImg").appendChild(resultImg);