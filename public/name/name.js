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

