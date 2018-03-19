var originalRating = [];
var eventScore = [];
var oppRatings = [];
var winExpects = [];
var stats = [];

var originalRatingInput = document.getElementById('originalRating');
var eventScoreInput = document.getElementById('eventScore');
var ratingsInput = document.getElementsByClassName('opponentRating');

function insert () {
	originalRating.push(originalRatingInput.value);
	originalRating = originalRating.map(Number);
	eventScore.push(eventScoreInput.value);
	eventScore = eventScore.map(Number);

	for (var i = 0; i < ratingsInput.length; i++) {
		if (typeof ratingsInput[i] !== "undefined") {
			oppRatings.push(ratingsInput[i].value);
			oppRatings = oppRatings.map(Number);
			}
		}
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


var ratingDifference = oppRatings.map(function(diff) {
	return originalRating - diff;
});

// What is the winning expectancies against each opponent ex. .64, .88 etc..
// var winExpect

for (i = 0; i < oppRatings.length; i++) {
	if (typeof oppRatings[i] !== 'undefined') {
		stats.push((oppRatings - originalRating) / 400);
	}
}

//P(A) = 1/(1+10m) where (power of m) is the rating difference (rating(B)-rating(A)) divided by 400.
for (i = 0; i < stats.length; i++) {
	if (typeof stats[i] !== 'undefined') {
		winExpects.push(1 / (1 +(Math.pow(10, stats))));
	}
}

// Add up the winning expectancies (W)  ex.  1.89
// use reduce

var totalExpects = winExpects.reduce(
  ( accumulator, currentValue ) => accumulator + currentValue,
  0
);

// Use a K factor of 10, although depends on federation (K)
var kFactor = 10


// Formula -- total = K * (S- W)   kfactor * (event score - winning expectencies)
// var total = kFactor * (eventScore - W);



// New rating is the old rating (R) + Total (round down, no decimals)
// newRating = originalRating + total



// Display new rating.
// newRating.html = newRating