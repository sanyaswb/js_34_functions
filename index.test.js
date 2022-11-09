const calc = require('./index');
const solution = require('./system/solution');
const { getRandomInt } = require('./system/environment');

test('Функция должна вернуть число', () => {
	const res = calc(2, '+', 2);

	expect(typeof res).toBe('number');
});

test('Тест. a: 2, sign: "+", b: 2', () => {
	const res = calc(2, '+', 2);

	expect(res).toBe(4);
});

test('Тест. a: 8, sign: "-", b: 4', () => {
	const res = calc(8, '-', 4);

	expect(res).toBe(4);
});

test('Тест. a: 120, sign: "/", b: 10', () => {
	const res = calc(120, '/', 10);

	expect(res).toBe(12);
});

test('Тест. a: 15, sign: "*", b: 5', () => {
	const res = calc(15, '*', 5);

	expect(res).toBe(75);
});

test('Auto: random outcomes', () => {
	const signs = ['+', '-', '*', '/'];

	for (let i = 0; i < 100; i++) {
		const a = getRandomInt(1, 500);
		const sign = signs[getRandomInt(0, signs.length - 1)];
		const b = getRandomInt(1, 500);

		const solutionResult = solution(a, sign, b);
		const userResult = calc(a, sign, b);

		expect(userResult).toBe(solutionResult);
	}
});