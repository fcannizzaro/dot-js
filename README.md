# dot-js
Use dot notation to get/set value in object
[![npm](https://img.shields.io/npm/v/dot-js.svg)](https://www.npmjs.com/package/dot-js)

# Install

```sh
npm i --save dot-js
```

# Usage

```javascript

var dot = require('dot-js')();

var sample = {
  foo: {
    bar: {
      single: 3
    }
  }
};

// 3
let value = sample.dot('foo.bar.single');

// or

let value = dot.get(sample, 'foo.bar.single');

// set bar value
sample.dot('foo.bar', value * 4);

// or

dot.set(sample, 'foo.bar', value * 4);

// { foo : { bar : 12 } }
console.log(sample);

```

# Module Function
extend Object prototype

```javascript
require('dot-js')();
```

# Object Prototype

### Object.dot(path)
get

### Object.dot(path, value)
set

# Functions

### get(object, path)

### set(object, path, value)


