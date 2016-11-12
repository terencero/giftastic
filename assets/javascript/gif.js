// array of subtopics
var topics = ['trees', 'flowers', 'bees', 'lakes', 'clouds'];
var cache = {};
var natureImage;
var state = $('natureImage').attr('data-state');
var slug;
// topic button click event handler to produce gif

$('.nature-btn').on('click', function(){	
	// addNature retrieves userinput
	var addNature = $('#nature-input').val();
	// this is the button clicked on, .data(nature) grabs whatever nature is set to
	var nature = $(this).data('nature');
	// variables for ajax - key, parameters, queryURL
	var apiKey = '&api_key=dc6zaTOxFJmzC';
	var param = '&limit=10&rating=g&rating=pg&rating=pg-13';
	var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + nature + apiKey + param;


	$.ajax({url: queryURL, method: 'GET'}).done(function(response){
		

		var results = response.data;


		for (var i = 0; i < results.length; i++) {
			// check if you have result in cache, if you do not, then assign cache[result.slug]=result
			
			var rating = results[i].rating;
			var p = $('<p>').text('Rating: ' + rating);
			natureImage = $('<img>').attr('data-state', slug).attr('class', 'newImage');
			natureImage.attr('src', results[i].images.fixed_height_still.url);
			$('.image-container').prepend(natureImage).prepend(p);
			//cache = results[i];
			//var result = cache[results.slug];
			cache.natureImage = results[i];
			slug = results[i].slug;
			
		}
			
			
// first attempt at toggling the image state
$(document.body).on('click', natureImage, function(){
   
});

	});
return false;
});

