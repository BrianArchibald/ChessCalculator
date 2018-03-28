var originalRating = 0;
	var eventScore = 0;
	var oppRatings = [];
	var winExpects = [];
	var stats = [];

function insert () {

	originalRating = 0;
	eventScore = 0;
	oppRatings = [];
	winExpects = [];
	stats = [];

	var originalRatingInput = document.getElementById('originalRating');
	var eventScoreInput = document.getElementById('eventScore');
	var ratingsInput = document.getElementsByClassName('opponentRating');
	
	originalRating = parseInt(originalRatingInput.value); //get number from string
	
	eventScore = eventScoreInput.value;
	eventScore = parseInt(eventScore);

	for (var i = 0; i < ratingsInput.length; i++) {
		if (typeof ratingsInput[i] !== "undefined") {
			oppRatings.push(ratingsInput[i].value);
			
			}
		}

	// the foreach below wont give me a new rating value //////	

	// ratingsInput.forEach(function (item) {
	// oppRatings.push(item);
	// });

		oppRatings.forEach(function (item) {
			stats.push((item-originalRating) / 400)
		});

		//P(A) = 1/(1+10m) where (power of m) is the rating difference (rating(B)-rating(A)) divided by 400.
		// for (i = 0; i < stats.length; i++) {
		// 	if (typeof stats[i] !== 'undefined') {
		// winExpects.push(1 / (1 +(Math.pow(10, stats[i]))));
		// 	}
		// }

		stats.forEach(function(item) {
			winExpects.push(1 / (1 +(Math.pow(10, stats))))
		});


		var totalExpects = winExpects.reduce(function( accumulator, currentValue ) {return accumulator + currentValue;
		}, 0);

		// Use a K factor of 10, although depends on federation (K)
		var kFactor = 10

		var totalFormula = kFactor * (eventScore - totalExpects);

		var newRating = Math.round(originalRating + totalFormula);

		document.getElementById('newRating').value = newRating;
}