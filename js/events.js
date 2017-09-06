//define functions here

function getIt(){
  $('p').on('click', function(){
    alert("Hey!");
  })
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass("tasty");
  })
}

function pressIt(){
  $("form").on("submit", function(key){
    if(key.which===71){
      alert("Alert!");
    }
  })
}



$(document).ready(function(){

// call functions here


});
