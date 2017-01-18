
// https://developer-paragon.epicgames.com
// https://developer-paragon.epicgames.com//v1/cards
//const descrp = effects.find(item => item.hasownproperty)'description)).descrition'

var baseUrl = 'https://developer-paragon.epicgames.com/v1/cards/complete';

function getData(callback) {
	var query = {
		url: baseUrl,
		headers: {
			'X-Epic-ApiKey': 'e5f6ebdd3c1e4fd6988d1e5fa90d9ecd',
			'Access-Control-Allow-Origin': '*',
		},
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
		getData(displayData);
	});
};

$(function() {
	submitSearch();
});