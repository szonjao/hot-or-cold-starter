var guessNumber=0;
var iceCold="Ice Cold";
var avgCold="Cold";
var avgWarm="Warm";
var avgHot="Hot";
var veryHot="Very Hot";
var exactGuess="Exactly! You win!";
var validateCalls=0;

function validateInput() {
	inputText=$('#userGuess').val();
	inputNumber=parseInt(inputText);

	if ((!isNaN(inputNumber)) && (inputNumber>=1 && inputNumber<=100)) {

		var diff = Math.abs(inputNumber - guessNumber);
		console.log("RESULT:"+inputNumber+", guess:"+guessNumber);
		console.log("DIFF:"+diff);

		if (diff==0) {
			document.getElementById("feedback").innerHTML = exactGuess;

			
			var list=document.getElementById("guessList");
			var entry=document.createElement('li');
			var numNode=document.createTextNode(inputNumber);
			entry.appendChild(numNode);
			list.appendChild(entry);
			
		} else if ((101 > diff) && (diff >= 50)) {
			document.getElementById("feedback").innerHTML = iceCold;
		} else if ((49 > diff) && (diff >= 30)) {
			document.getElementById("feedback").innerHTML = avgCold;
		} else if ((29 > diff) && (diff >= 20)) {
			document.getElementById("feedback").innerHTML = avgWarm;
		} else if ((19 > diff) && (diff >= 10)) {
			document.getElementById("feedback").innerHTML = avgHot;
		} else if ((9 > diff) && (diff > 1)) {
			document.getElementById("feedback").innerHTML = veryHot;
		} 

		validateCalls++;
  		document.getElementById("count").innerHTML = validateCalls;

	} else {
		alert ("Please, input an integer Number between 1 and 100!");
	}

	$('#userGuess').val("");
	$('#userGuess').focus();
}; 

function newGame() {
	document.getElementById("feedback").innerHTML = "Make your Guess!";
	guessNumber=Math.floor((Math.random() * 100) + 1);

	console.log(guessNumber);
	
	validateCalls = 0;
	document.getElementById("count").innerHTML = validateCalls;
};

$(document).ready(function(){
	
	document.getElementById("guessList").innerHTML = "";
	/*$("#userGuess").keypress(function(evt)	{
	if ( evt.which == 13 ) {
	$("#userGuess").val(""); 
	};*/

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$("#userGuess").keypress(function(evt){
  		if ( evt.which == 13 ) {
    		evt.preventDefault();
    		validateInput();
  		}
  	});

	$("#guessButton").click(validateInput); 

  	newGame();

  	$(".new").click(newGame); 

});



