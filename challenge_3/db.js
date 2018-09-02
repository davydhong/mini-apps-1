var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB CONNECTED!');
});

var checkOutSchema = new mongoose.Schema({
  F1: { name: String, email: String, password: String },
  F2: { address_line1: String, address_line2: String, city: String, state: String, zip: Number },
  F3: { card_number: Number, exp_month: Number, exp_year: Number, card_cvv: Number, zip: Number },
  orderComplete: Boolean
});

var checkOutDB = mongoose.model('checkOut', checkOutSchema);

module.exports.checkOutDB = checkOutDB;

('5b8785595506c28a44382ce4');
