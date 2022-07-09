// nextBtn 클릭시 prologue페이지 등장
document.getElementById("openBtn").addEventListener("click", function(){
    document.getElementById("page_container").style.display = "none";
    document.getElementById("prologue").style.display = "block";
    document.getElementById("prologue").style.display = "flex";
});

if(isMobile()){
  //시작페이지
  let mainDiv = document.getElementById("page_container");
  mainDiv.style.width = "100%";

  let mainGif = document.getElementById("mainGif");
  mainGif.style.width = "100%";

  //프롤로그
  let proGif =  document.getElementById("prologueGif");
  proGif.src = "/image/prologueVideo_mb.gif";
  proGif.style.width = "100%";

  let btn = document.getElementById("nextBtn");
  btn.style.top = "90%";
  btn.style.left = "80%";
}

function isMobile() {
  console.log(navigator.userAgent);
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}