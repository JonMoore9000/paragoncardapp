
// https://developer-paragon.epicgames.com
// https://developer-paragon.epicgames.com//v1/cards
//const descrp = effects.find(item => item.hasownproperty)'description)).descrition'

var baseUrl = 'https://developer-paragon.epicgames.com/v1/cards/complete';
var local = 'http://localhost:8080/cards';

function getData(callback) {
	var query = {
		url: local,
		type: 'GET',
		dataType: 'json',
		success: callback,
		};
	$.ajax(query);
};

function displayData(data) {
	var resultElement ='';
	resultElement = data.map(function(item) {
	console.log(item.effects[0]);
	return '<div class="each-card">' + '<p class="card-name">' + item.name + '</p>' +
	'<p class="card-type">' + item.slotType + '</p>' +
	'<img class="card-image" src="http:' + item.images.medium_stats + '">' +
	'</div>';
	});
	$('.js-results').html(resultElement);
};

function submitSearch(event) {
	$('.js-button').click(function(event) {
		event.preventDefault();
		$('.homePage').addClass('invisible');
		$('.resourcesPage').addClass('invisible');
		$('.howItWorksPage').addClass('invisible');
		$('.cardsPage').removeClass('invisible');
		getData(displayData);
	});
};

function toHIWPage(event) {
	$('.js-button1').click(function(event) {
		event.preventDefault();
		$('.homePage').addClass('invisible');
		$('.cardsPage').addClass('invisible');
		$('.resourcesPage').addClass('invisible');
		$('.howItWorksPage').removeClass('invisible');
	});
}

function toResourcesPage(event) {
	$('.js-button2').click(function(event) {
		event.preventDefault();
		$('.homePage').addClass('invisible');
		$('.cardsPage').addClass('invisible');
		$('.howItWorksPage').addClass('invisible');
		$('.resourcesPage').removeClass('invisible');
	});
}

$(function() {
	submitSearch();
	toHIWPage();
	toResourcesPage();
});