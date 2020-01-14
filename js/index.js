$(document).ready(function(){

  $("#dog-btn").first().click(function(){
    $("#text-box").append("<li>Bark!</li>");
  });
  $("#cat-btn").first().click(function(){
    $("#text-box").append("<li>Meow!</li>");
  });
  $("#gerbil-img").click(function(){
    $("#text-box").append("<li>Eek!</li>");
  });
  $("#gerbil-btn").click(function(){
    $("#gerbil-img").removeClass("hidden");
  });
  $("#snake-img").click(function(){
    $("#text-box").append("<li>Sssssss!</li>");
  });
  $("#snake-btn").click(function(){
    $("#snake-img").removeClass("hidden");
  });

});