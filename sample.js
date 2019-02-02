const dot = require('./dist/index');

const sample = {
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

// set a new field
sample.dot('foo.create.new.field', 'hello');

/* {
    "foo": {
        "bar": 12,
        "create": {
            "new": {
                "field": "hello"
            }
        }
    }
} */
console.log(sample);

// hello
console.log(sample.foo.create.new.field);