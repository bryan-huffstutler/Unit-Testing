const fizzbuzz = require('../Fizzbuzzkata.js')

test('fizzbuzz 2 equals \'2\'', () => {
  expect(fizzbuzz(2)).toBe('2')
})

test('fizzbuzz 1 equals \'1\'', () => {
  expect(fizzbuzz(1)).toBe('1')
})

test('fizzbuzz 3 equals \'fizz\'', () => {
  expect(fizzbuzz(3)).toBe('fizz')
})

test('fizzbuzz 5 equals \'buzz\'', () => {
  expect(fizzbuzz(5)).toBe('buzz')
})

test('fizzbuzz 15 equals \'fizzbuzz\'', () => {
  expect(fizzbuzz(15)).toBe('fizzbuzz')
})