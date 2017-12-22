$(document).ready(function() {

	var timerInSeconds = 60;
	var correctAnswers = 0;
	var wrongAnswers = 0;
	var unanswered = 0;
	var gameStarted = false;

	

	$('#questions-display').hide();
	$('#end-game-display').hide();

	

	//Stat game screen. Show questions on button click

	$('#start-game').on('click', function(){

		$('#start-display').hide();
		$('#questions-display').show();
		startTimer();
		return;

	});

	function timer (){
		gameStarted = true;
		if (gameStarted === true) {
		timerInSeconds --;
		$('#timer-display').text(timerInSeconds + ' ' + 'Seconds');
	}
		if (timerInSeconds === -1) {
		
			endGame();
		

		}


	}

	function startTimer (){

		setInterval(timer, 1000);


	}

	$('.finished').on('click', function() {

		endGame();

	});

	function endGame() {
		
		gamestarted = false;
		var question1 = $('input:radio[name="question1"]:checked').val();
		var question2 = $('input:radio[name="question2"]:checked').val();
		var question3 = $('input:radio[name="question3"]:checked').val();
		var question4 = $('input:radio[name="question4"]:checked').val();
		var question5 = $('input:radio[name="question5"]:checked').val();
		var question6 = $('input:radio[name="question6"]:checked').val();
		var question7 = $('input:radio[name="question7"]:checked').val();
		var question8 = $('input:radio[name="question8"]:checked').val();
		var question9 = $('input:radio[name="question9"]:checked').val();
		var question10 = $('input:radio[name="question10"]:checked').val();

		$('#end-game-display').show();
		$('#questions-display').hide();
		

		if (question1 === 'Romulus and Remus') {
			correctAnswers ++;
		}

		else if (question1 === undefined){
			unanswered ++;
		}
		

		else {
			wrongAnswers ++;

		}
		

		if (question2 === 'Lucius Tarquinius Superbus') {
			correctAnswers ++;
		}

		else if (question2 === undefined){
			unanswered ++;
		}
		

		else {
			wrongAnswers ++;

		}

		if (question3 === 'Carthage') {
			correctAnswers ++;
		}

		else if (question3 === undefined){
			unanswered ++;
		}
		

		else {
			wrongAnswers ++;

		}

		if (question4 === 'Zama') {
			correctAnswers ++;
		}

		else if (question4 === undefined){
			unanswered ++;
		}
		

		else {
			wrongAnswers ++;

		}

		if (question5 === 'Dictator for Life') {
			correctAnswers ++;
		}

		else if (question5 === undefined){
			unanswered ++;
		}
		

		else {
			wrongAnswers ++;

		}

		if (question6 === 'Pompeii') {
			correctAnswers ++;
		}

		else if (question6 === undefined){
			unanswered ++;
		}
		

		else {
			wrongAnswers ++;

		}

		if (question7 === 'The Rubicon') {
			correctAnswers ++;
		}

		else if (question7 === undefined){
			unanswered ++;
		}
		

		else {
			wrongAnswers ++;

		}

		if (question8 === 'Augustus Caesar') {
			correctAnswers ++;
		}

		else if (question8 === undefined){
			unanswered ++;
		}
		

		else {
			wrongAnswers ++;

		}

		if (question9 === 'Claudius') {
			correctAnswers ++;
		}

		else if (question9 === undefined){
			unanswered ++;
		}
		

		else {
			wrongAnswers ++;

		}

		if (question10 === 'Byzantium') {
			correctAnswers ++;
		}

		else if (question10 === undefined){
			unanswered ++;
		}
		

		else {
			wrongAnswers ++;

		}

		$('#right-answers').html(correctAnswers);
		$('#wrong-answers').html(wrongAnswers);
		$('#unanswered-questions').html(unanswered);




	}


	




});