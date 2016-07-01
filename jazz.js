var mongoose = require('mongoose');

var Album = mongoose.model('Album', {
  name: String,
  artist: String,
  released: Number,
  duration: Number,
  styles: [String]
});

module.exports = Album;
