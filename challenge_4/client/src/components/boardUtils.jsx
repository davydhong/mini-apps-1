var getRowAvail = function(matrix, col) {
	for (let j = matrix.length - 1; j > 0; j--) {
		if (matrix[j][col] === '') {
			return j;
		}
	}
};

var evalOneLine = function(arr) {
	var current = '';
	var counter;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '') {
			current = '';
			counter = 0;
		} else if (arr[i] === 'blue' && arr[i] !== current) {
			current = 'blue';
			counter = 1;
		} else if (arr[i] === 'red' && arr[i] !== current) {
			current = 'red';
			counter = 1;
		} else if (arr[i] === 'blue' && arr[i] === current) {
			counter++;
			if (counter >= 4) {
				return 'blue';
			}
		} else if (arr[i] === 'red' && arr[i] === current) {
			counter++;
			if (counter >= 4) {
				return 'red';
			}
		}
	}
	return null;
};

var transpose = function(matrix) {
	var matrixTr = [];
	for (let i = 0; i < matrix[0].length; i++) {
		matrixTr[i] = [];
		for (let j = 0; j < matrix.length; j++) {
			matrixTr[i][j] = matrix[j][i];
		}
	}
	return matrixTr;
};

var diagOfMatrix = function(matrix) {
	var majorDiagonals = {};
	for (let i = -(matrix[0].length - 1); i < matrix.length; i++) {
		var targetMajor = i;
		for (let j = 0; j < matrix.length; j++) {
			for (let k = 0; k < matrix[j].length; k++) {
				if (j - k === targetMajor) {
					majorDiagonals[`${targetMajor}Ma`] = majorDiagonals[`${targetMajor}Ma`] || [];
					majorDiagonals[`${targetMajor}Ma`].push(matrix[j][k]);
				}
			}
		}
	}

	var minorDiagonals = {};
	for (let i = 0; i < matrix.length + matrix[0].length - 1; i++) {
		var targetMinor = i;
		for (let j = 0; j < matrix.length; j++) {
			for (let k = 0; k < matrix[j].length; k++) {
				if (j + k === targetMinor) {
					minorDiagonals[`${targetMinor}mi`] = minorDiagonals[`${targetMinor}mi`] || [];
					minorDiagonals[`${targetMinor}mi`].push(matrix[j][k]);
				}
			}
		}
	}

	var allDiagonals = { ...majorDiagonals, ...minorDiagonals };
	return Object.values(allDiagonals);
};

var checkWinner = function(matrix, callback) {
	var allCombo = [...matrix, ...transpose(matrix), ...diagOfMatrix(matrix)];
	var evalDirections = allCombo.map(direction => evalOneLine(direction));

	if (evalDirections.includes('red')) {
		alert('Red Wins!');
		callback(makeNewBoard(matrix.length, matrix[0].length));
	} else if (evalDirections.includes('blue')) {
		alert('Blue Wins!');
		callback(makeNewBoard(matrix.length, matrix[0].length));
	}
};

var makeNewBoard = function(rows, cols) {
	var boardInit = [];
	for (let i = 0; i < rows; i++) {
		boardInit.push([]);
		for (let j = 0; j < cols; j++) {
			boardInit[i][j] = '';
		}
	}
	return boardInit;
};

export { getRowAvail, evalOneLine, transpose, diagOfMatrix, checkWinner, makeNewBoard };
