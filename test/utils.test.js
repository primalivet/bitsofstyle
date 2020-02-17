const test = require('ava')

const { compose } = require('../lib/util-compose')
const { log } = require('../lib/util-log')
const { trace } = require('../lib/util-trace')

test.beforeEach(t => {
  t.context.log = console.log
  t.context.mockLogged = []
  const mockLog = (...args) => {
    t.context.mockLogged.push(...args)
  }

  console.log = mockLog
})

test.afterEach(t => {
  console.log = t.context.log
})

test('compose', t => {
  const actual = compose((x) => x * 2, (x) => x + 2)(8)
  const expected = 20

  t.is(actual, expected)
})

test.serial('log logs the label and returns the value', t => {
  const actual = log('label')('value')
  const expected = 'value'

  t.is(t.context.mockLogged[0], 'label')
  t.is(actual, expected)
})

test.serial('trace logs the label and value and returns the value', t => {
  const actual = trace('label')('value')
  const expected = 'value'

  t.is(t.context.mockLogged[0], 'label')
  t.is(t.context.mockLogged[1], 'value')
  t.is(actual, expected)
})
