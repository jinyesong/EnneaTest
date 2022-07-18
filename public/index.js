// nextBtn 클릭시 prologue페이지 등장
document.getElementById("openBtn").addEventListener("click", function(){
    document.getElementById("page_container").style.display = "none";
    document.getElementById("prologue").style.display = "block";
    document.getElementById("prologue").style.display = "flex";
});

if(isMobile()=="true"){
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