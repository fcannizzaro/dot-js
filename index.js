// object navigation
var pick = (obj, dots, value) => {
  let size = dots.length;
  for (let key in obj) {
    if (key == dots[0]) {
      if (size == 1) {
        if (value !== undefined) {
          return (obj[key] = value);
        } else {
          return obj[key];
        }
      }
      if (typeof obj[key] == 'object') {
        return pick(obj[key], dots.slice(1), value);
      }
    }
  }
};

// obtain dot notation as array
var dots = (notation) => notation.split('.');

// extend Object prototype
module.exports = () => {

  Object.prototype.dot = function (notation, value) {
    return pick(this, dots(notation), value);
  };

};

// dot get
module.exports.get = (obj, notation) => pick(obj, dots(notation));

// dot set
module.exports.set = (obj, notation, value) => pick(obj, dots(notation), value);
