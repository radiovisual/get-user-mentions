import test from 'ava';
import fn from './';

test('expect a string', t => {
	t.throws(() => {
		fn({}, 'Expected a string');
	});
});

test('finds user mentions', t => {
	const users = fn('hello @michael and @mark, how are you?');
	t.is(users[0], '@michael');
	t.is(users[1], '@mark');
});

test('finds all user mentions by default', t => {
	const users = fn('hello @michael and @michael and @mark, how are you?');
	t.is(users.length, 3);
	t.is(users[0], '@michael');
	t.is(users[1], '@michael');
	t.is(users[2], '@mark');
});

test('finds unique user mentions', t => {
	const users = fn('hello @michael and @michael and @mark, how are you?', {unique:true});
	t.is(users.length, 2);
	t.is(users[0], '@michael');
	t.is(users[1], '@mark');
});

test('no matches returns empty array', t => {
	t.is(fn('hello michael and mark, how are you?').length, 0);
});

test('finds user mentions in latin-extended character sets', t => {
	const users = fn('@Düsseldorf, @Köln, @ÁÜãç');
	t.is(users[0], '@Düsseldorf');
	t.is(users[1], '@Köln');
	t.is(users[2], '@ÁÜãç');
});


test('allows nameOnly option', t => {
	const users = fn('hello @michael and @mark, how are you?', {nameOnly:true});
	t.is(users.length, 2);
	t.is(users[0], 'michael');
	t.is(users[1], 'mark');
});

test('allows underscores in names', t => {
	const users = fn('hello @mic_hael and @ma_rk, how are you?');
	t.is(users.length, 2);
	t.is(users[0], '@mic_hael');
	t.is(users[1], '@ma_rk');
});