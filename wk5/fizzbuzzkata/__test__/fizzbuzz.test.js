const fizzbuzz = require('../Fizzbuzzkata.js')

test('fizzbuzz 2 equals \'2\'', () => {
  expect(fizzbuzz(2)).toBe('2')
})

test('fizzbuzz 1 equals \'1\'', () => {
  expect(fizzbuzz(1)).toBe('1')
})