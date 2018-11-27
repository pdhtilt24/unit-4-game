$(document).ready(function() {
    var yourScore = 0;
    var wins = 0;
    var loses = 0;
  
    var tNumbers = Math.floor(Math.random() * 102 + 19);
    $("#targetnumber").text(tNumbers);
  
    var c1Numbers = Math.floor(Math.random() * 12 + 1);
    var c2Numbers = Math.floor(Math.random() * 12 + 1);
    var c3Numbers = Math.floor(Math.random() * 12 + 1);
    var c4Numbers = Math.floor(Math.random() * 12 + 1);
  
    function win() {
      alert("Congratulations! You won!");
      wins++;
      $("#win").text(wins);
      reset();
    }
    function loss() {
      alert("Sorry! You lose!");
      loses++;
      $("#lose").text(loses);
      reset();
    }
  
    $("#cr1").on("click", function() {
      yourScore = yourScore + c1Numbers;
      $("#score").text(yourScore);
      if (yourScore == tNumbers) {
        win();
      } else if (yourScore > tNumbers) {
        loss();
      }
    });
    $("#cr2").on("click", function() {
      yourScore = yourScore + c2Numbers;
      $("#score").text(yourScore);
      if (yourScore == tNumbers) {
        win();
      } else if (yourScore > tNumbers) {
        loss();
      }
    });
    $("#cr3").on("click", function() {
      yourScore = yourScore + c3Numbers;
      $("#score").text(yourScore);
      if (yourScore == tNumbers) {
        win();
      } else if (yourScore > tNumbers) {
        loss();
      }
    });
    $("#cr4").on("click", function() {
      yourScore = yourScore + c4Numbers;
      $("#score").text(yourScore);
      if (yourScore == tNumbers) {
        win();
      } else if (yourScore > tNumbers) {
        loss();
      }
    });
  
    function reset() {
      tNumbers = Math.floor(Math.random() * 102 + 19);
      $("#targetnumber").text(tNumbers);
      c1Numbers = Math.floor(Math.random() * 12 + 1);
      c2Numbers = Math.floor(Math.random() * 12 + 1);
      c3Numbers = Math.floor(Math.random() * 12 + 1);
      c4Numbers = Math.floor(Math.random() * 12 + 1);
      yourScore = 0;
      $("#score").text(yourScore);
    }
  });
  