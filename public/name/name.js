// nextBtn 클릭시 prologue페이지 등장
document.getElementById("nextBtn").addEventListener("click", function(){
    sessionStorage.setItem("name", document.getElementById("nameBox").value);
    document.getElementById("back").style.display = "none";
    document.getElementById("prologuePage").style.display = "block";
});

