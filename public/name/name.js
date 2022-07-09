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

if(isMobile()=="true") {
    let bgi = document.getElementById("background_img");
    bgi.src = "/image/nameGif_mb.gif";
    bgi.style.width = "100%";

    let inn = document.getElementById("inner");
    inn.style.position = "relative";
    inn.style.height = "fit-content";
    inn.style.margin = "auto";
    inn.style.width = "100%";

    let nbi = document.getElementById("nextBtn_img");
    nbi.style.width = "100px";

    let nb = document.getElementById("nameBox");
    nb.style.fontSize = "5vw"
}
if(isMobile()=="iPad") {
    let nbi = document.getElementById("nextBtn_img");
    nbi.style.width = "100px";
    let nb = document.getElementById("nameBox");
    nb.style.fontSize = "5vw"
}

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