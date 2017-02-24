// object navigation
var pick = (obj, path, value) => {
  let size = path.length;
  for (let key in obj) {
    if (key == path[0]) {
      if (size == 1) {
        if (value !== undefined) {
          return (obj[key] = value);
        } else {
          return obj[key];
        }
      }
      if (typeof obj[key] == 'object') {
        return pick(obj[key], path.slice(1), value);
      }
    }
  }
};

// obtain dot notation as array
var dots = (path) => path.split('.');

// extend Object prototype
module.exports = () => {

  Object.defineProperty(Object.prototype, 'dot', {
    enumerable: false,
    value: function (path, value) {
      return pick(this, dots(path), value);
    }
  });

};

// dot get
module.exports.get = (obj, path) => pick(obj, dots(path));

// dot set
module.exports.set = (obj, path, value) => pick(obj, dots(path), value);
