// object navigation
var pick = (obj, path, value) => {
	let size = path.length;
	if (!Object.keys(obj).includes(path[0])) {
		const key = path[0];
		if (value != undefined) {
			if (size > 1) {
				obj[key] = {};
				return pick(obj[key], path.slice(1), value);
			} else {
				return (obj[key] = value);
			}
		} else {
			return undefined;
		}
	}
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

// get and set
var functions = {
	get: (obj, path) => pick(obj, dots(path)),
	set: (obj, path, value) => pick(obj, dots(path), value)
};

// extend Object prototype
module.exports = () => {

	Object.defineProperty(Object.prototype, 'dot', {
		enumerable: false,
		value: function(path, value) {
			return pick(this, dots(path), value);
		}
	});

	return functions;

};

// dot get
module.exports.get = functions.get;

// dot set
module.exports.set = functions.set;
