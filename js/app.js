
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
  	var randNum = Math.floor((Math.random() * 100) + 1);
  	console.log(randNum);
  	var userCount = 0;
  	var userGuess
  	var lastGuess

	$("#guessButton").on("click", function(e){
		e.preventDefault();
		userGuess = document.getElementById('userGuess').value;
		if (userGuess < 1 || userGuess > 100 || userGuess === "0") {
			$("#feedback").text("Make a guess between 1 and 100");
			$('#userGuess').val(null);
		} else {
		  	$("#guessList").append("<li>" + userGuess + "</li>");
	  		console.log("userGuess: " + userGuess);
	  		$('#count').text(userCount+=1);
	  		if (randNum == userGuess) {
	  			$("#feedback").text("You win! Congratulations!");
	  		} else if((randNum - userGuess) > 50 || (randNum - userGuess) < -50) {
	  			$("#feedback").text("Ice cold!");
	  		}
	  		console.log("lastGuess: " + lastGuess);
	  		lastGuess = userGuess;

	  		$('#userGuess').val(null);
	  	};
	});






});


