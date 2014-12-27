
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});



  	var randNum = Math.floor((Math.random() * 100) + 1);
  	console.log(randNum);

  	var userGuess = document.getElementById('userGuess');

	$("#guessButton").on("click", function(){
		if (userGuess.value.trim()==0) {
			$("#feedback").text("You did not enter a guess");
		} else {
		  	$("#guessList").append("<li>" + userGuess.value + "</li>");
	  		console.log(userGuess.value);
	  		$('#userGuess').val(null);
	  	};
	});






});


