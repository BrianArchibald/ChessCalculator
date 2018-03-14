// Subjects current rating (R)
var originalRating = document.getElementById('originalRating').value;
	console.log(originalRating);
// Get ratings of opponents

// Put opponents in array


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


var ratings = [];

var ratingsInput = document.getElementsByClassName("opponentRatings");

function insert () {
	ratings.push( ratingsInput.value );

	clearAndShow();
}

function clearAndShow () {
	ratingsInput.value = "";

	messageBox.innerHTML = "";
}




// Calculate ratings difference between opponent and subject for each opponent
// use forEach


// What is the winning expectancies against each opponent 

// Add up the winning expectancies (W)
// use reduce

// What was subjects total score for the event (S)
// reduce

// Use a K factor of 10, although depends on federation (K)


// Formula  Total = K * (S - W)

// New rating is the old rating (R) + Total