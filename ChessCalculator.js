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
		
		// oppRatings = ratingsInput.map(function(ratingsIn){
		// 	return parseInt(ratingsIn.value);
		// })
		
		for (i = 0; i < oppRatings.length; i++) {
	if (typeof oppRatings[i] !== 'undefined') {
		stats.push((oppRatings[i] - originalRating) / 400);
	}
}

//P(A) = 1/(1+10m) where (power of m) is the rating difference (rating(B)-rating(A)) divided by 400.
for (i = 0; i < stats.length; i++) {
	if (typeof stats[i] !== 'undefined') {
		winExpects.push(1 / (1 +(Math.pow(10, stats[i]))));
	}
}

// Add up the winning expectancies (W)  ex.  1.89
// use reduce

var totalExpects = winExpects.reduce(function( accumulator, currentValue ) {return accumulator + currentValue;
}, 0);

// Use a K factor of 10, although depends on federation (K)
var kFactor = 10

// Formula -- total = K  (S- W)   kfactor  (event score - winning expectencies)
// var total = kFactor  (eventScore - W);
var totalFormula = kFactor * (eventScore - totalExpects);

// New rating is the old rating (R) + Total (round down, no decimals)
// newRating = originalRating + total
var newRating = Math.round(originalRating + totalFormula);

document.getElementById('newRating').value = newRating;
}



// Calculate ratings difference between opponent and subject for each opponent
// use forEach     own rating - opp rating


// oppRatings.forEach (function(diff) {
// var ratingDifference = originalRating - oppRatings
// console.log (ratingDifference);
// });

//   or   

// // oppRatings.map ( function (item) {
// // 	var ratingDifference = originalRating - item;
// });
// ---------------------------------------------------------Did not work----
// var ratingDifference;
// function difference (originalRating, oppRatings) {
// 	for (i=0; i < oppRatings.length; i++) {
// 		ratingDifference += originalRating - oppRatings[i];
// 	}
// 		return ratingDifference;
// }
// ------------------------------------------------------

// const ratingDifference = oppRatings.map(x => originalRating - x);
// console.log(ratingDifference);


/*var ratingDifference = oppRatings.map(function(diff) {
	return originalRating - diff;
});*/

// What is the winning expectancies against each opponent ex. .64, .88 etc..
// var winExpect



// New rating is the old rating (R) + Total (round down, no decimals)
// newRating = originalRating + total



// Display new rating.
// newRating.html = newRating

//testing new PC commit 