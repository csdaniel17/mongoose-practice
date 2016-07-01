var mongoose = require('mongoose');

var ZipCode = mongoose.model('ZipCode', {
  _id: String,
  city: String,
  loc: [Number],
  pop: Number,
  state: String
});

module.exports = ZipCode;
