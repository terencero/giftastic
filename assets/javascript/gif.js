var topics = ['trees', 'flowers', 'bees', 'lakes', 'clouds'];

//$('#find-nature').on('click', function(){
$('.nature-btn').on('click', function(){	

	var addNature = $('#nature-input').val();
	var nature = $(this).data('nature');
	var apiKey = '&api_key=dc6zaTOxFJmzC';
	var param = '&limit=10&rating=g&rating=pg&rating=pg-13';
	var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + nature + apiKey + param;

	$.ajax({url: queryURL, method: 'GET'}).done(function(response){
		console.log(response);

	});
return false;
});