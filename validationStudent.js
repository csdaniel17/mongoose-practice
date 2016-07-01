var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/class-db');
var Student = require('./student');

/* failed code - missing links.website and wrong gender path:
var cody = new Student({
  name: 'Cody',
  links: {
    github: 'https://github.com/codybarber'
  },
  gender: 'male',
  projects: ['Rate the Throne', 'Tic Tac Toe', 'HIIT Interval Trainer'],
  points: 1
});

cody.save(function(err) {
  if (err) {
    console.error(err.message);
    console.error(err);
    return;
  }
  console.log('saved cody! ', cody);
});

*/

var cody = new Student({
  name: 'Cody',
  links: {
    website: 'http://codyrocks.com',
    github: 'https://github.com/codybarber'
  },
  gender: 'Male',
  projects: ['Rate the Throne', 'Tic Tac Toe', 'HIIT Interval Trainer'],
  points: 1
});

cody.save(function(err) {
  if (err) {
    console.error(err.message);
    console.error(err);
    return;
  }
  console.log('saved cody! ', cody);
});
