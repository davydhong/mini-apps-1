const fs = require('fs');
const path = require('path');

module.exports.JSONtoCSV = function(jsonObj) {
	var storeObj = {};
	const childByChild = currentChild => {
		for (var key in currentChild) {
			if (key !== 'children') {
				storeObj[key] = storeObj[key] || [];
				storeObj[key].push(currentChild[key]);
			}
		}
		if (currentChild.children.length !== 0) {
			for (let i = 0; i < currentChild.children.length; i++) {
				childByChild(currentChild.children[i]);
			}
		}
	};
	childByChild(jsonObj);
	const header = Object.keys(storeObj);
	const values = transpose(Object.values(storeObj));
	const combined = [[...header], ...values];
	return combined.join('\n');
};

const transpose = function(matrix) {
	var newMatrix = [];
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			newMatrix[j] = newMatrix[j] || [];
			newMatrix[j][i] = matrix[i][j];
		}
	}
	return newMatrix;
};

// NOT NECESSARY: JUST FOR REFERENCE
module.exports.readCSV = function(filePath, callback) {
	fs.readFile(filePath, (err, data) => {
		if (err) throw err;
		callback(data.toString());
	});
};

module.exports.CVStoJSON = function(str) {
	const rows = str.split('\n');
	var matrix = rows.map(row => row.split(','));
	matrix.pop();
	const header = matrix[0];
	var jsonfied = {};
	matrix.shift();

	const jsonRowByRow = function(rowIdx, obj) {
		if (rowIdx >= matrix.length) {
			return;
		} else {
			for (let i = 0; i < matrix[rowIdx].length; i++) {
				obj[header[i]] = matrix[rowIdx][i];
			}
			obj.children = [];
			if (rowIdx < matrix.length - 1) obj.children[0] = {};
			jsonRowByRow(rowIdx + 1, obj.children[0]);
		}
	};
	jsonRowByRow(0, jsonfied);
	return jsonfied;
};
