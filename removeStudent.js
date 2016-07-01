var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/class-db');
var Student = require('./student');

//first find student by id
Student.find({_id: '57767bac2554c39f1118fa29'}, function(err, student) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('found student by id ', student);
});

//remove student by id
Student.remove(
  {_id: '57767bac2554c39f1118fa29'},
  function(err, reply) {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('remove student ', reply);
  }
);
