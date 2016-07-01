var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/class-db');
var Student = require('./student');

Student.update(
  {name: 'DeeAnn'},
  {$set: {points: 15}},
  function(err, reply) {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('update successful ', reply);
  }
);
