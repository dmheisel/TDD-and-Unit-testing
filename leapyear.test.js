const leapYear = require('./leapYear');

describe('testing leapyear function to determine if year is leap year or not', () => {
	test('year 400 is a leap year', () => {
		expect(leapYear(400)).toBe(true);
	});
	test('year 104 is a leap year', () => {
		expect(leapYear(104)).toBe(true);
	});
	test('year 100 is not a leap year', () => {
		expect(leapYear(100)).toBe(false);
	});
	test('year as a string works properly', () => {
		expect(leapYear('100')).toBe(false);
		expect(leapYear('800')).toBe(true);
	});
	test('no input returns false', () => {
		expect(leapYear()).toBe(false);
	});
	test('string of letters returns false', () => {
		expect(leapYear('words')).toBe(false);
	});
});
