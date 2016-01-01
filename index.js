'use strict';
var arrayUnique = require('array-uniq');

module.exports = function (str, opts) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	opts = opts || {};
	opts.unique = opts.unique || false;

	var users = str.match(/@[a-zA-Z0-9_]+/igm);

	if (!users) {
		return [];
	}

	if (opts.unique) {
		return arrayUnique(users);
	}

	return users;
};
