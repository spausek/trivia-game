$(document).ready(function() {

	var timerInSeconds = 120;

	

	//$('#questions-display').hide();

	

	//Stat game screen. Show questions on button click

	$('#start-game').on('click', function(){

		$('#start-display').hide();
		$('#question-display').show();
		startTimer();
		return;

	});

	function timer (){
		timerInSeconds --;
		$('timer-display').text(timerInSeconds + 'Seconds');


	}

	function startTimer (){

		setInterval(timer, 1000);


	}


	




});