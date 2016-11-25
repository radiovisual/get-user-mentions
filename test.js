var test = require('tape');
var fn = require('./');

test('expect a string', function (t) {
	t.plan(1);
	t.throws(function () {
		fn({}, 'Expected a string');
	});
});

test('finds user mentions', function (t) {
	t.plan(2);
	var users = fn('hello @michael and @mark, how are you?');
	t.equal(users[0], '@michael');
	t.equal(users[1], '@mark');
});

test('finds all user mentions by default', function (t) {
	t.plan(4);
	var users = fn('hello @michael and @michael and @mark, how are you?');
	t.equal(users.length, 3);
	t.equal(users[0], '@michael');
	t.equal(users[1], '@michael');
	t.equal(users[2], '@mark');
});

test('finds unique user mentions', function (t) {
	t.plan(3);
	var users = fn('hello @michael and @michael and @mark, how are you?', {unique: true});
	t.equal(users.length, 2);
	t.equal(users[0], '@michael');
	t.equal(users[1], '@mark');
});

test('no matches returns empty array', function (t) {
	t.plan(1);
	t.equal(fn('hello michael and mark, how are you?').length, 0);
});

test('finds user mentions in latin-extended character sets', function (t) {
	t.plan(3);
	var users = fn('@Düsseldorf, @Köln, @ÁÜãç');
	t.equal(users[0], '@Düsseldorf');
	t.equal(users[1], '@Köln');
	t.equal(users[2], '@ÁÜãç');
});

test('finds unique user mentions, with nameOnly option', function (t) {
	t.plan(3);
	var users = fn('hello @michael and @michael and @mark, how are you?', {unique: true, nameOnly: true});
	t.equal(users.length, 2);
	t.equal(users[0], 'michael');
	t.equal(users[1], 'mark');
});

test('allows nameOnly option', function (t) {
	t.plan(3);
	var users = fn('hello @michael and @mark, how are you?', {nameOnly: true});
	t.equal(users.length, 2);
	t.equal(users[0], 'michael');
	t.equal(users[1], 'mark');
});

test('allows underscores in names', function (t) {
	t.plan(3);
	var users = fn('hello @mic_hael and @ma_rk, how are you?');
	t.equal(users.length, 2);
	t.equal(users[0], '@mic_hael');
	t.equal(users[1], '@ma_rk');
});
