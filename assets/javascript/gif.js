var topics = ['trees', 'flowers', 'bees', 'lakes', 'clouds'];

$('#find-nature').on('click', function(){

	var nature = $('#nature-input').val();

	var apiKey = '&api_key=dc6zaTOxFJmzC';
	var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + nature + apiKey;

	$.ajax({url: queryURL, method: 'GET'}).done(function(response){
		console.log(response);

	});
return false;
});