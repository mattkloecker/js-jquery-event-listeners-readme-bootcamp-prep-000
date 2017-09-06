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
  $("form").on("submit", function(){
    if($( "input:first").val() === "G"){
      alert('Alert!');
      return;
    }
    return;
  })
}



$(document).ready(function(){

// call functions here


});
