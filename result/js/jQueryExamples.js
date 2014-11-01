function flyLeft() {
	$('.header').animate({left:'600px'}, 3000, 'linear', flyRight);
};

function flyRight() {
	$('.header').animate({left:'0px'}, 3000, 'linear', flyLeft);
};

function changeHiperlinkLooks() {
	 $('li a').addClass('fancyLink');
};

function setUpHeader() {
	$('h1').addClass('myh1');
	$('h2').addClass('myh2');
	$('h3').addClass('myh3');
	$('h4').addClass('myh4');
};

function colorEvenOddRows() {
	$('#OddEvenTarget li:odd').addClass('oddRow');
	$('#OddEvenTarget li:even').addClass('evenRow');
};

function sliderise() {
	$('h3').each(function(element) {
		$(this).click(function() {
			var style = $(this).parent().children().not('h3').attr('style'); //Well another reason to hate js
			var content0 = $(this).parent().children('ul').children('li').filter(':eq(0)').text().substring(0,60);
			var content1 = $(this).parent().children('p').text().substring(0,30);
			var content = '';
			
			if(content0==='') {
				content = content1;
			}
			else {
				content = content0;
			}
			
			if(style !== undefined) {
				if(style.indexOf('display: block') !== -1) {
					$(this).attr('title',content);
				}
				else {
					$(this).attr('title','');
				}
			}
			else {
				$(this).attr('title',content);
			}

			$(this).parent().children().not('h3').slideToggle('slow', function() {});
		});
	});
}

function toggleAll() {
	var counter = 0;
	$('h3').each(function(element) {
		if(counter!=0){
			var content0 = $(this).parent().children('ul').children('li').filter(':eq(0)').text().substring(0,60);
			var content1 = $(this).parent().children('p').text().substring(0,30);
			var content = '';
			
			if(content0==='') {
				content = content1;
			}
			else {
				content = content0;
			}
			$(this).attr('title',content);
			$(this).parent().children().not('h3').slideToggle('slow', function() {});
		}
		counter++;
	});
};

function strongPlease() {
	$('#OddEvenTarget li').each(function(){
    		var boldMe = $(this);
    		boldMe.html( boldMe.text().replace(new RegExp('(\\b)Prosze'),'<strong>Prosze</strong>') );
  	});
}

$(document).ready(function(){
	flyLeft();
	changeHiperlinkLooks();
	setUpHeader();
	colorEvenOddRows();
	sliderise();
	strongPlease();
	toggleAll();

	//Need restFun.js for it
	addScoreDivs();
	getAverageScore();
});