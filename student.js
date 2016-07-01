var mongoose = require('mongoose');

var Student = mongoose.model('Student', {
  name: String,
  links: {
    website: String,
    github: String
  },
  gender: String,
  projects: [String],
  points: Number
});

module.exports = Student;
