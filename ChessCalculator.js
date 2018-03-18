var originalRating = [];
var originalRatingInput = document.getElementById('originalRating');
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

const ratingDifference = oppRatings.map(x => x - originalRating);
console.log (ratingDifference);


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