// nextBtn 클릭시 prologue페이지 등장
document.getElementById("openBtn").addEventListener("click", function(){
    document.getElementById("page_container").style.display = "none";
    document.getElementById("prologue").style.display = "block";
    document.getElementById("prologue").style.display = "flex";
});

setInterval(function(){
    if($("#video").prop("ended")){
      //영상종료 후 진행할 함수 입력부분
      location.href="/name/name.html";
    }
  },200);
//0.2초마다 비디오의 속성 ended의 값이 무엇인지 검사한다