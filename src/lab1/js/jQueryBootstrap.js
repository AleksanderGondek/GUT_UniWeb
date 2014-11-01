function flyLeft() {
	$('.header').animate({left:'600px'}, 3000, 'linear', flyRight);
};

function flyRight() {
	$('.header').animate({left:'0px'}, 3000, 'linear', flyLeft);
};


var scoreDiv = '<label>Ocen</label><div class=\'btn-group\'><a href=\'#\' onclick=\'scoreIt(1,this)\' class=\'btn btn-default\'>1</a><a href=\'#\' onclick=\'scoreIt(2,this)\' class=\'btn btn-default\'>2</a><a href=\'#\' onclick=\'scoreIt(3,this)\' class=\'btn btn-default\'>3</a><a href=\'#\' onclick=\'scoreIt(4,this)\' class=\'btn btn-default\'>4</a><a href=\'#\' onclick=\'scoreIt(5,this)\' class=\'btn btn-default\'>4</a></div>';
var scoredDiv = '<label>Oceniono na</label>&nbsp;';
var averageScoreDiv = '<label>Wynik</label><label class=\'averageScoreResult label label-info\'></label>';

function addScoreDivs() {
	$('.giveScore').append(scoreDiv);
	$('.averageScore').append(averageScoreDiv);
};

function getAverageScore() {
	$.get('/ocena', function(data) {
		$('.averageScoreResult').html(data);
	});
};

function scoreIt(number,element) {
	var target = $(element).parent().parent().parent().children().filter('.giveScore');
	target.empty();
	target.append(scoredDiv + '<label class=\'label label-primary\'>' + number + '</label>');

	$.post('/ocena/' + number);
};

$(document).ready(function(){
	flyLeft();
	addScoreDivs();
	getAverageScore();
});