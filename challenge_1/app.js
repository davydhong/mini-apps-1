var addEvents = function() {
	var playerOneTurn = true;
	var boxes = document.getElementsByClassName('board');

	var turnSwitch = function() {
		playerOneTurn = !playerOneTurn;
		var turnIndicator = document.getElementsByClassName('turnIndicator')[0];
		if (playerOneTurn) {
			turnIndicator.innerText = "Player One's Turn";
		} else {
			turnIndicator.innerText = "Player Two's Turn";
		}
	};
	for (let i = 0; i < boxes.length; i++) {
		// the following can invoke only one function and
		// can't handle multiple functions;
		boxes[i].addEventListener('click', function() {
			turnSwitch();
			// console.log(this);
			markerOX.call(this, playerOneTurn);
		});
		// boxes[i].onclick = function() {
		// 	console.log(this);
		// };
	}
};
var markerOX = function(playerOneTurn) {
	// console.log(this, box);
	if (playerOneTurn) {
		this.innerText = 'X';
	} else {
		this.innerText = 'O';
	}
};

// Add an event Handle to the thead to switch between
//'Player One's Turn'
//'Player Two 's Turn
// Use true vs. false

// Add an event Handle to box elements
// If true, 'X' is put down
// If false, 'O' is put down
// Change the player switch

// At each turn, evaluate who the winner is
// Need a function to check if there is a winner
// If there is a winner, table footer should say "Player One is the Winner!"
// Clear the board when the footer is clicked
