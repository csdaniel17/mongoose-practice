var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/class-db');
var Student = require('./student');

var cody = new Student({
  name: 'Cody',
  links: {
    github: 'https://github.com/codybarber'
  },
  gender: 'Male',
  projects: ['Rate the Throne', 'Tic Tac Toe', 'HIIT Interval Trainer'],
  points: 1
});

cody.save(function(err) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('saved cody! ', cody);
});

var carolyn = new Student({
  name: 'Carolyn',
  links: {
    website: 'http://carolynsdaniel.surge.sh',
    github: 'https://github.com/csdaniel17'
  },
  gender: 'Female',
  projects: ['Rate the Throne', 'Tic Tac Toe', 'Rock, Paper, Scissors'],
  points: 10
});

carolyn.save(function(err) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('saved carolyn! ', carolyn);
});

var deeann = new Student({
  name: 'DeeAnn',
  links: {
    website: 'http://www.deeannkendrick.com',
    github: 'https://github.com/dkendrick25'
  },
  gender: 'Female',
  projects: ['Rate the Throne', 'Weather App', 'Rock, Paper, Scissors'],
  points: 10
});

deeann.save(function(err) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('saved deeann! ', deeann);
});
