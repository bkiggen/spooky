// BACK END

function chooseSpooky() {
  var choiceNumber = Math.floor(Math.random() * 6);
  var spookies = ['spider', 'bat', 'horse', 'hand1', 'hand2', 'hand3'];
  var choice = spookies[choiceNumber]
  return choice;
}





$(document).ready(function(){
  var score = 0;
  $(".score").text(score);
  $(".spider").click(function(){
    var elementInfo = document.getElementById("spider");
    var elementName = "spider";
    drop(elementInfo, elementName);
    score += 1;
    $(".score").text(score);
  });

  $(".bat").click(function(){
    var elementInfo = document.getElementById("bat");
    var elementName = "bat";
    drop(elementInfo, elementName);
    score += 3;
    $(".score").text(score);
  });

  $(".horse").click(function(){
    var elementInfo = document.getElementById("horse");
    var elementName = "horse";
    drop(elementInfo, elementName);
    score += 2;
    $(".score").text(score);
  });

  $(".hand1").click(function(){
    var elementInfo = document.getElementById("hand1");
    var elementName = "hand1";
    drop(elementInfo, elementName);
    score += 1;
    $(".score").text(score);
  });

  $(".hand2").click(function(){
    var elementInfo = document.getElementById("hand2");
    var elementName = "hand2";
    drop(elementInfo, elementName);
    score += 1;
    $(".score").text(score);
  });

  $(".hand3").click(function(){
    var elementInfo = document.getElementById("hand3");
    var elementName = "hand3";
    drop(elementInfo, elementName);
    score += 1;
    $(".score").text(score);
  });

  function drop(idname, className){
    var rect = idname.getBoundingClientRect();
    $("." + className).addClass("stop");
    var left = rect.left - 8;
    var top = rect.top;
    $("." + className).animate({
      top: top,
      left: left
    }, 1, function(){
    });
    $("." + className).animate({
      top: "+=2000"
    }, 1000, function(){
    });
    $("." + className).addClass("nopoint");
    $("." + className).removeClass(className + "-move");
    $("." + className).removeClass("stop");
    setTimeout(function(){
      $("." + className).removeClass("nopoint");
    }, 1000);
  };
  window.setInterval(function(){
    var choice = chooseSpooky();
    $("." + choice).addClass(choice + "-move");
  }, 1000);
});
