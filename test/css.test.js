const test = require('ava')
const fs = require('fs').promises
const path = require('path')
const { makePerBreakpoint, generateBorders, generateColors, generateSpacing } = require('../css.js')

test.before(async t => {
  // load default config
  t.context.config = await fs.readFile(path.resolve(__dirname, '../config.json'), { encoding: 'utf8' }).then(JSON.parse)
})

test('makePerBreakpoint throws on missing argument', t => {
  t.throws(() => makePerBreakpoint(), Error)
})

test('makePerBreakpoint throws on wrong type of argument', t => {
  t.throws(() => makePerBreakpoint(['100px', '200px', '300px']), Error)
})

test('makePerBreakpoint throws on invalid array objects', t => {
  t.throws(() => makePerBreakpoint([{ name: 'small' }]), Error)
  t.throws(() => makePerBreakpoint([{ name: 'small', value: undefined }]), Error)
  t.throws(() => makePerBreakpoint([{ name: undefined, value: '100px' }]), Error)
})

test('makePerBreakpoint returns a function', t => {
  const actual = makePerBreakpoint(t.context.config.variables.breakpoints)
  const expected = 'function'

  t.is(typeof actual, expected)
})

test('perBreakpoint returns a correct media query string', t => {
  const mockFn = () => { return '' }
  const { config } = t.context
  const perBreakpoint = makePerBreakpoint(config.variables.breakpoints)

  const actual = perBreakpoint(mockFn, config)
  // manually build a string from the breakpoint config object
  const expexted = config.variables.breakpoints.map(breakpoint => {
    let str = ''
    str += `@media screen and (min-width: ${breakpoint.value}) {\n`
    str += '}\n'
    return str
  }).join('')

  // replace \n and ' ' with '' for comparison
  t.is(actual.replace(/ |\n/g, ''), expexted.replace(/ |\n/g, ''))
})

test('generateBorders throws on missing argument', t => {
  t.throws(() => generateBorders(), Error)
})

test('generateBorders throws on invalid argument', t => {
  const mockArgs = [
    {}, // empty object
    { styles: ['dotted'] }, // missing width key
    { width: { unit: 'rem', values: [1, 2] } }, // missing styles key
    { styles: ['dotted'], width: { unit: [], values: '' } } // wrong types on width[keys]
  ]

  t.throws(() => generateBorders(mockArgs[0]), Error)
  t.throws(() => generateBorders(mockArgs[1]), Error)
  t.throws(() => generateBorders(mockArgs[2]), Error)
  t.throws(() => generateBorders(mockArgs[3]), Error)
})

test('generateBorders returns a correct css string', t => {
  const { border } = t.context.config.variables
  console.log(border)

  const actual = generateBorders(border, 'foo')
  let expected = ''
  expected += '.foo-b--dotted { border-style: dotted; }\n'
  expected += '.foo-b--dashed { border-style: dashed; }\n'
  expected += '.foo-b--solid { border-style: solid; }\n'
  expected += '.foo-bw1 { border-width: 0.125rem; }\n'
  expected += '.foo-bw2 { border-width: 0.25rem; }\n'
  expected += '.foo-bw3 { border-width: 0.5rem; }\n'
  expected += '.foo-bw4 { border-width: 1rem; }\n'
  expected += '.foo-bw5 { border-width: 2rem; }\n'

  t.is(actual, expected)
})
