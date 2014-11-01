var scoreDiv = '<label>Ocen</label><p><a href=\'#\' onclick=\'scoreIt(1,this)\'>1</a> | <a href=\'#\' onclick=\'scoreIt(2,this)\'>2</a> | <a href=\'#\' onclick=\'scoreIt(3,this)\'>3</a> | <a href=\'#\' onclick=\'scoreIt(4,this)\'>4</a> | <a href=\'#\' onclick=\'scoreIt(5,this)\'>5</a></p>';
var scoredDiv = '<label>Oceniono na</label>';
var averageScoreDiv = '<label>Wynik</label><p class=\'averageScoreResult\'></p>';


function addScoreDivs() {
	$('h3').each(function(element) {
		$(this).parent().children().filter('.giveScore').append(scoreDiv);
		$(this).parent().children().filter('.averageScore').append(averageScoreDiv);
	});
};

function getAverageScore() {
	$.get('/ocena', function(data) {
		$('.averageScoreResult').html(data);
	});
};

function scoreIt(number,element) {
	var target = $(element).parent().parent().parent().children().filter('.giveScore');
	target.empty();
	target.append(scoredDiv + '<p>' + number + '</p>');

	$.post('/ocena/' + number);
};