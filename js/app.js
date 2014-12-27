
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
  	var userGuess = document.getElementById('userGuess');
  	var userCount = 0;

	$("#guessButton").on("click", function(){
		if (userGuess.value < 1 || userGuess.value > 100 || userGuess.value === "0") {
			$("#feedback").text("Make a guess between 1 and 100");
			$('#userGuess').val(null);
		} else {
		  	$("#guessList").append("<li>" + userGuess.value + "</li>");
	  		console.log(userGuess.value);
	  		$('#count').text(userCount+=1);
	  		if((randNum - userGuess.value) > 50 || (randNum - userGuess.value) < -50) {
	  			$("#feedback").text("Ice cold!");
	  		}
	  		$('#userGuess').val(null);
	  	};
	});






});


