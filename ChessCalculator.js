var originalRating = [];
var originalRatingInput = document.getElementById('originalRating');
var ratingDifference;
var eventScoreInput = document.getElementById('eventScore');
var eventScore = [];


// Get ratings of opponents
// Put opponents in array
var oppRatings = [];
var ratingsInput = document.getElementsByClassName('opponentRating');

function insert () {
	originalRating.push(originalRatingInput.value);
	eventScore.push(eventScoreInput.value);

	for (var i = 0; i < ratingsInput.length; i++) {
		if (typeof ratingsInput[i] !== "undefined") {
			oppRatings.push(ratingsInput[i].value);
		}
		}
	}
//-----------oppResults is not working or showing numbers in the array
oppRatings = oppRatings.map(Number);


// Calculate ratings difference between opponent and subject for each opponent
// use forEach     own rating - opp rating

// var ratingDifference = [];
// oppRatings.forEach (function(diff) {
// 	var ratingDifference = originalRating - oppRatings

// });

//   or   

oppRatings.map ( function (item) {
	var ratingDifference = originalRating - item;
});

// What is the winning expectancies against each opponent ex. .64, .88 etc..
// var winExpect


// Add up the winning expectancies (W)  ex.  1.89
// use reduce

// reduce var ratingDifference = oppRatings.map (function (value) {


// Use a K factor of 10, although depends on federation (K)
// var kFactor = 10



// Formula -- total = K * (S- W)   kfactor * (event score - winning expectencies)
// var total = kFactor * (eventScore - W);



// New rating is the old rating (R) + Total (round down, no decimals)
// newRating = originalRating + total



// Display new rating.
// newRating.html = newRating