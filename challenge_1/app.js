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
var addEvents = function() {
	var playerOneTurn = true;
	var boxArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
	var boxes = document.getElementsByClassName('board');
	var winCounter = {
		X: 0,
		O: 0,
	};

	var turnSwitch = function() {
		if (this.innerHTML === '') {
			playerOneTurn = !playerOneTurn;
		}
		var turnIndicator = document.getElementsByClassName('turnIndicator')[0];
		debugger;
		if (playerOneTurn) {
			turnIndicator.innerText = "Player One's Turn";
		} else {
			turnIndicator.innerText = "Player Two's Turn";
		}
	};
	for (let i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener('click', function() {
			turnSwitch.call(this);
			markerOX.call(this, playerOneTurn, boxArr);
			setTimeout(() => whoIsWinner(boxes), 0);
			setTimeout(() => EmptyIfFull(boxes), 1);
		});
	}
	/////////////////HELPER FUNCTIONS//////////////
	///////////////////////////////////////////////
	var markerOX = function(turnSwitch) {
		if (turnSwitch) {
			boxArr[parseInt(this.attributes.row.value)][parseInt(this.attributes.col.value)] = 1;
			this.innerText = 'X';
		} else {
			boxArr[parseInt(this.attributes.row.value)][parseInt(this.attributes.col.value)] = 2;
			this.innerText = 'O';
		}
	};

	var EmptyIfFull = function(boardAsDOM) {
		var boxFull = !boxArr.map(boxRow => !boxRow.includes(0)).includes(false);
		if (boxFull) {
			alert('Draw!');
			setTimeout(() => {
				boxArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
				for (let i = 0; i < boardAsDOM.length; i++) {
					boardAsDOM[i].innerText = '';
				}
			}, 0);
		} else {
		}
	};

	var whoIsWinner = function(boardAsDOM) {
		const rowReducer = (accumulator, currentValue) => {
			if (accumulator === currentValue && accumulator !== 0) {
				return accumulator;
			} else {
				return false;
			}
		};
		const boardReducer = (accumulator, currentValue) => {
			return accumulator || currentValue;
		};
		var boxMod = [...boxArr, ...transpose(boxArr), ...diagonal(boxArr)];
		var Winner = boxMod.map(boxRow => boxRow.reduce(rowReducer)).reduce(boardReducer);

		if (Winner === 1) {
			++winCounter.X;
			alert('Player X Won!');
			boxArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
			for (let i = 0; i < boardAsDOM.length; i++) {
				boardAsDOM[i].innerText = '';
			}
		} else if (Winner === 2) {
			++winCounter.O;
			alert('Player O Won!');
			boxArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
			for (let i = 0; i < boardAsDOM.length; i++) {
				boardAsDOM[i].innerText = '';
			}
		}
		document.getElementsByClassName('scoreBoard')[0].innerHTML = `${winCounter.X}   :  ${winCounter.O}`;
	};
};

var transpose = function(matrix) {
	var newMatrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
	for (let i = 0; i < newMatrix.length; i++) {
		for (let j = 0; j < newMatrix[i].length; j++) {
			newMatrix[i][j] = matrix[j][i];
		}
	}
	return newMatrix;
};

var diagonal = function(matrix) {
	var newMatrix = [];
	var majorDiag = [];
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (i === j) {
				majorDiag.push(matrix[i][j]);
			}
		}
	}
	newMatrix.push(majorDiag);
	var minorDiag = [];
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (i + j === 2) {
				minorDiag.push(matrix[i][j]);
			}
		}
	}
	newMatrix.push(minorDiag);
	return newMatrix;
};
