var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/population');
var ZipCode = require('./zipcode');

ZipCode.aggregate(
  {$group: { _id: {city: '$city'}, total: {$sum: '$pop'} } },
  {$sort: {total: -1}},
  {$limit: 3},
  function(err, reply) {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('top three populations are ', reply);
  }
);
