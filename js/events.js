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
  $('form').on('keydown', function(key){
    if(key.which==71){
      alert('Alert!');
      return;
    }
    return;
  })
}

function submitIt(){
  $("form").on("submit", function(){
    alert("Your form is going to be submitted now.");
    return;
  }
}


$(document).ready(function(){

// call functions here


});
