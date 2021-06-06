$(document).ready(function(){
  
  $(".buy a").click(function(){
    $(this).addClass("active");
    $(".rent a").removeClass("active");
  });

  $(".rent a").click(function(){
    $(this).addClass("active");
    $(".buy a").removeClass("active");
  });

  $(".condition").click(function(){
    $(".condition.active").removeClass("active");
    $(this).toggleClass("active");
  });

  $(".sort").click(function(){
    $(".condition.active").removeClass("active");
    $(this).toggleClass("active");
  });

  $(".save").click(function(){
    $(this).toggleClass("active");
  });

  $(".select a").click(function(){
    $(this).toggleClass("active");
    $(".condition").removeClass("active");
  });

  $(".delete a").click(function(){
    $(".select a").removeClass("active");
  });

});

function goBack() {
  window.history.back();
}