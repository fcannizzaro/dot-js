var dot = require('./index')();

var sample = {
  foo: {
    bar: {
      single: 3
    }
  }
};

// 3
let value = sample.dot('foo.bar.single');

// set bar value
sample.dot('foo.bar', value * 4);

// { foo : { bar : 12 } }
console.log(sample);
