// nextBtn 클릭시 prologue페이지 등장
document.getElementById("nextBtn").addEventListener("click", function(){
    if(document.getElementById("nameBox").value == ""){
        alert("너의 이름을 알려줘!");
    }
    else{
        sessionStorage.setItem("name", document.getElementById("nameBox").value);
        location.href = "../chapter/chapter1.html";
    }
});

if(isMobile()){
    let proGif =  document.getElementById("back_img");
    proGif.src = "/image/nameGif_mb.gif";
    proGif.style.width = "100%";
  
    let btn = document.getElementById("nextBtn");
    btn.style.top = "87%";
    btn.style.left = "75%";

    let btnImg = document.getElementById("nextBtnImg");
    btnImg.style.width = "130px";

    let inner = document.getElementById("inner");
    inner.style.width = "100%";
    inner.style.height = "100%";
    inner.style.transform = "none";

    let nameBox = document.getElementById("nameBox");
    nameBox.style.top = "50%";
    nameBox.style.left = "36%";
    nameBox.style.width = "30%";
    nameBox.style.height = "3%";
    nameBox.style.fontSize = "50px";
  }

function isMobile() {
    console.log(navigator.userAgent);
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }