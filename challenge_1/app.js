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
// Footer Keeps a Track of the Score

var addEvents = function() {
	var playerOneTurn = true;
	// boxArr is an Array representation of the tic-tac-toe
	// Player 1 (or X) replaces 0 with 1, and Player 2 (or O) uses 2
	var boxArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
	var boxes = document.getElementsByClassName('board');
	var winCounter = {
		// For score tracking
		X: 0,
		O: 0,
	};

	//
	for (let i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener('click', function() {
			// using -call(this) so that the function can read clicked element's row, column, and innerHTML.
			turnSwitch.call(this);
			markerOX.call(this);
			// using setTimeout so to delay wipe-out of the board when a game ends.
			setTimeout(() => whoIsWinner(boxes), 0);
			setTimeout(() => EmptyIfFull(boxes), 1);
		});
	}
	/////////////////HELPER FUNCTIONS//////////////
	///////////////////////////////////////////////
	var turnSwitch = function() {
		// This restricts a player from over-riding the other player's marker
		if (this.innerHTML === '') {
			playerOneTurn = !playerOneTurn;
		}
		var turnIndicator = document.getElementsByClassName('turnIndicator')[0];
		// just changing the turnIndicator on the table header;
		if (playerOneTurn) {
			turnIndicator.innerText = "Player One's Turn";
		} else {
			turnIndicator.innerText = "Player Two's Turn";
		}
	};
	const markerOX = function() {
		var rowFromDOM = parseInt(this.attributes.row.value);
		var colFromDOM = parseInt(this.attributes.col.value);
		// Even if it's player one's turn, have to use !playerOneTurn since turnSwitch has been invoked before makerOX before marker has been placed.
		if (!playerOneTurn) {
			// Updating the Array representation simultaneously with the DOM change.
			boxArr[rowFromDOM][colFromDOM] = 1;
			this.innerText = 'X';
		} else {
			boxArr[rowFromDOM][colFromDOM] = 2;
			this.innerText = 'O';
		}
	};

	const EmptyIfFull = function(boardAsDOM) {
		// First reduce the boxRow from 3x3 matrix to 3x1 array of booleans.
		// Row containing 0 will return false.
		// If there is no 0 on the Matrix => [true,true,true]
		// ![true,true,true].includes(false) === true;
		var boxFull = !boxArr.map(boxRow => !boxRow.includes(0)).includes(false);
		if (boxFull) {
			alert('Draw!');
			// Using setTimeout to delay wiping out the board
			setTimeout(() => {
				boxArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
				for (let i = 0; i < boardAsDOM.length; i++) {
					boardAsDOM[i].innerText = '';
				}
			}, 0);
		} else {
		}
	};

	const whoIsWinner = function(boardAsDOM) {
		// [0, 0, 0].reduce(rowReducer) === false
		// [0, 1, 1].reduce(rowReducer) === false
		// [1, 1, 1].reduce(rowReducer) === 1
		// [2, 2, 2].reduce(rowReducer) === 2
		const rowReducer = (accumulator, currentValue) => {
			if (accumulator === currentValue && accumulator !== 0) {
				return accumulator;
			} else {
				return false;
			}
		};
		// reducer that returns whichever value that is not false;
		const boardReducer = (accumulator, currentValue) => {
			return accumulator || currentValue;
		};
		// boxMod is 8x3 Matrix; first 3 is the original board
		// [...[original(3x3)],...[transposed(3x3)],...[diagonal(2x3)]]
		// for instance:
		// boxMod.map(boxRow => boxRow.reduce(rowReducer)) returns Array(8)
		// [false, 1, false, false...].reduce(boardReducer) === 1
		// [false, 2, false, false...].reduce(boardReducer) === 2
		// [false, false, false, false...].reduce(boardReducer) === false;
		var boxMod = [...boxArr, ...transpose(boxArr), ...diagonal(boxArr)];
		var Winner = boxMod.map(boxRow => boxRow.reduce(rowReducer)).reduce(boardReducer);

		if (Winner === 1) {
			++winCounter.X;
			alert('Player X Won!');
			// resets the tracking Matrix and the DOM.
			boxArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
			for (let i = 0; i < boardAsDOM.length; i++) {
				boardAsDOM[i].innerText = '';
			}
		} else if (Winner === 2) {
			++winCounter.O;
			alert('Player O Won!');
			// resets the tracking Matrix and the DOM.
			boxArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
			for (let i = 0; i < boardAsDOM.length; i++) {
				boardAsDOM[i].innerText = '';
			}
		}
		// Updates the score board.
		document.getElementsByClassName('scoreBoard')[0].innerHTML = `${winCounter.X}   :  ${winCounter.O}`;
	};

	// Just a helper function to transpose (rotate 90deg) the current board -
	// returns [Array(3),Array(3),Array(3)]
	const transpose = function(matrix) {
		var newMatrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
		for (let i = 0; i < newMatrix.length; i++) {
			for (let j = 0; j < newMatrix[i].length; j++) {
				newMatrix[i][j] = matrix[j][i];
			}
		}
		return newMatrix;
	};
	// A helper function to get major and minor diagonals -
	// returns [Array(3),Array(3)]
	const diagonal = function(matrix) {
		var newMatrix = [];
		newMatrix.push([matrix[0][0], matrix[1][1], matrix[2][2]]);
		newMatrix.push([matrix[2][0], matrix[1][1], matrix[0][2]]);
		return newMatrix;
	};
};
