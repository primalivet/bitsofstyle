const test = require('ava')
const { compose, log } = require('../utils.js')

test('compose', t => {
  const actual = compose((x) => x * 2, (x) => x + 2)(8)
  const expected = 20

  t.is(actual, expected)
})

test('log returns the value', t => {
  const actual = log('label')('value')
  const expected = 'value'

  t.is(actual, expected)
})
