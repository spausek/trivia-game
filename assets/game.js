$(document).ready(function() {

	var timerInSeconds = 10;
	var correctAnswers = 0;
	var wrongAnswers = 0;
	var unanswered = 0;

	

	$('#questions-display').hide();

	

	//Stat game screen. Show questions on button click

	$('#start-game').on('click', function(){

		$('#start-display').hide();
		$('#questions-display').show();
		startTimer();
		return;

	});

	function timer (){
		timerInSeconds --;
		$('#timer-display').text(timerInSeconds + ' ' + 'Seconds');
		if (timerInSeconds === -1) {
			//display end div
			endGame();

		}


	}

	function startTimer (){

		setInterval(timer, 1000);


	}

	function endGame() {

		//show end div
		var question1 = $('input:radio[name="question1"]:checked').val();

		if (question1 === 'Romulus and Remus') {
			correcAnswers ++;
		}

		else if (question1 === undefined){
			wrongAnswers ++;
		}
		

		else {
			wrongAnswers ++;

		}
		console.log(wrongAnswers);



	}


	




});