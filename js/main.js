$(document).ready(function(){

  $(".ham").on("click",function(){
    $("li").toggleClass("visible");
    $(".ham").removeClass("visible");
  });

});
