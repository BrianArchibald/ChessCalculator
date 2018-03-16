// Subjects current rating (R)
var originalRating = [];
var originalRatingInput = document.getElementById('originalRating');
var ratingDifference;
var eventScoreInput = document.getElementById('eventScore').value;
var eventScore = [];



// Get ratings of opponents
// Put opponents in array
var oppRatings = [];
var ratingsInput = document.getElementsByClassName('opponentRating');

function insert () {
	for (var i = 0; i < ratingsInput.length; i++) {
		if (typeof ratingsInput[i] !== "undefined") {
			oppRatings.push(ratingsInput[i].value);
		}
	}
	originalRating.push(originalRatingInput.value);
	eventScore.push(eventScoreInput.value);
}
//-----------oppResults is not working or showing numbers in the array
oppRatings = oppRatings.map(Number);



// var opponents = document.getElementsByClassName('opponentRatings').value;
	// ratings = [].map.call(opponents, function (rating) {
	// console.log(rating.value);
	// });


	// [].forEach.call(opponents, function () {
	//	console.log(opponents);
	// });

	// Array.prototype.forEach.call(opponents, function (opps) {
	//	console.log(opps.tagName);
	// });



// var ratings = [];

// var ratingsInput = document.getElementsByClassName("opponentRatings");

// function insert () {
// 	ratings.push( ratingsInput.value );

// 	clearAndShow();
// }

// function clearAndShow () {
// 	ratingsInput.value = "";

// 	messageBox.innerHTML = "";
// }




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