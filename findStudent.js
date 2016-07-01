var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/class-db');
var Student = require('./student');

Student.find(function(err, students) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('found students ', students);
});

Student.find({name: 'Cody'}, function(err, student) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('found cody ', student);
});
