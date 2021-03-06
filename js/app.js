
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	// Global variables //
  	var randNum = null
  	var userCount = null
  	var userGuess = null
  	var lastGuess = null

  	// Global functions //
  	var setNum = function() {
  		randNum = Math.floor((Math.random() * 100) + 1);
  		console.log(randNum);
  	}
  	var resetInput = function() {
  		$("#userGuess").val(null);
  	}
  	var resetCount = function() {
  		userCount = 0;
  		$('#count').text(userCount)
  	}
  	var newGame = function() {
  		$("section").css("height", "380px")
		$("#feedback").text("Make your guess!");
		$("#guessList").empty();
		$("#userGuess").show();
		$("#guessButton").show();
		$("#gameButton").hide();
		resetCount();
		setNum();
	}

  	// Game start //
  	setNum();

	$("#guessButton").on("click", function(e){
		e.preventDefault();

		userGuess = document.getElementById('userGuess').value;
		
		// Input error checks //
		if (userGuess < 1 || userGuess > 100 || userGuess === "0") {
			$("#feedback").text("My number is between 1 and 100");
			resetInput()
		} else if (userGuess % 1 != 0) {
			$("#feedback").text("Use numbers instead of letters");
			resetInput()
		} else {
			// Feedback on guess//
			var numCheck = function(n, msg) {
				if(userGuess <= (randNum - n) || (randNum + n ) <= userGuess) {
		  			$("#feedback").text(userGuess + msg);
		  		}
			}
	  		numCheck(0, " is correct! You win!");
	  		numCheck(1, " is burning Hot");
	  		numCheck(10, " is hot");
	  		numCheck(20, " is warm");
	  		numCheck(30, " is cold");
	  		numCheck(50, " is ice cold");

	  		// Updating record and reset//
	  		console.log("userGuess: " + userGuess);
	  		console.log("lastGuess: " + lastGuess);
			$("#guessList").append("<li>" + userGuess + "</li>");
	  		$('#count').text(userCount+=1);
	  		lastGuess = userGuess;
	  		resetInput()
	  	}

	  	if(userGuess==randNum) {
		$("#userGuess").hide();
		$("#guessButton").hide();
		$("#gameButton").show();
		$("section").css("height", "305px")
		}

	});

	// New game //
	$(".new").on("click", function() {
		newGame();
	});
	$("#gameButton").on("click", function() {
		newGame();
	});




});


