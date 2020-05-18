// Window幅に応じたメニュー表示の変更
function ShowAndHide(win){
  if(win < 769){
    $("#button").show();
    $("#lists").hide();
  }else{
    $("#button").hide();
    $("#lists").show();
  }
}

$( function(){

  // 初めてページを開いた時の状態チェック
  ShowAndHide($(window).width());

  // Windowサイズが変更された時の状態チェック
  $(window).resize(function(){
    ShowAndHide($(window).width());
  });

  // メニューボタンクリック時のトグル動作
  $("#button").click( function () {
    $("#lists").slideToggle();
  });

});

//***************//

document.body.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;

  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY
  })

  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1
  })
})
