const { checkOutDB } = require('./db');

module.exports.actions = {
	retrieveData: function(callback) {
		// console.log(checkOutDB);
		checkOutDB.find(function(err, data) {
			if (err) return console.error(err);
			callback(data);
		});
	},
	initUserData: function(data, callback) {
		delete data.page;
		console.log(data);
		checkOutDB.create({ F1: data }, function(err, newEntry) {
			if (err) throw new Error(err);
			callback(newEntry._id);
		});
	},
	updateUserData: function(data, callback) {
		var objId = data.objectId;
		var page = data.page;
		delete data.objectId;
		delete data.page;
		if (page === 'F2') {
			checkOutDB.updateOne({ _id: objId }, { F2: data }, function(err, updated) {
				if (err) throw new Error(err);
				callback(updated);
			});
		} else if (page === 'F3') {
			checkOutDB.updateOne({ _id: objId }, { F3: data, orderComplete: true }, function(err, updated) {
				if (err) throw new Error(err);
				callback(updated);
			});
		}
	},
};
