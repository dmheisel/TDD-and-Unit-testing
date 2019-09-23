const fizzBuzz = require('./fizzbuzz')
//testing fizzbuzz

describe('testing for fizzbuzz', () => {
  test('input 3 returns "Fizz"', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
  });
  test('input of 5 returns "Buzz"', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
  })
  test('input of 15 returns "FizzBuzz"', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  })
  test('input of 8 returns 8', () => {
    expect(fizzBuzz(8)).toBe(8)
  })
  test('input of string number still works', () => {
    expect(fizzBuzz('15')).toBe('FizzBuzz')
  })
  test('no input returns undefined', () => {
    expect(fizzBuzz()).toBe(undefined)
  })
})
