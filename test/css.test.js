const path = require('path')
const fs = require('fs').promises
const test = require('ava')

const { perBreakpoint, generateBorders, generateColors, generateSpacing } = require('../css.js')

test.beforeEach('load default config', async t => {
  const configPath = path.resolve(__dirname, '../config.json')

  t.context.config = await fs.readFile(configPath, { encoding: 'utf8' })
    .then(JSON.parse)
})

test.afterEach(t => {
  delete t.context.config
})

test('perBreakpoint returns a correct css media query string', t => {
  const { breakpoints } = t.context.config.variables
  const mockFn = () => { return '.test-class { display: inherit; }\n' }
  // manually build a string from the breakpoint config object
  const mockCss = breakpoints.map(bp => {
    return '' +
     `@media screen and (min-width: ${bp.value}) {\n` +
     mockFn() +
     '}\n'
  }).join('')

  const actual = perBreakpoint(t.context.config, mockFn)
  const expected = mockFn() + mockCss

  t.is(actual, expected)
})

test('generateBorders returns a correct css string without prefix', t => {
  const mockCss = '' +
  '.b--dotted { border-style: dotted; }\n' +
  '.b--dashed { border-style: dashed; }\n' +
  '.b--solid { border-style: solid; }\n' +
  '.bw1 { border-width: 0.125rem; }\n' +
  '.bw2 { border-width: 0.25rem; }\n' +
  '.bw3 { border-width: 0.5rem; }\n' +
  '.bw4 { border-width: 1rem; }\n' +
  '.bw5 { border-width: 2rem; }\n' +
  '.br1 { border-radius: 0.125rem; }\n' +
  '.br2 { border-radius: 0.25rem; }\n' +
  '.br3 { border-radius: 0.5rem; }\n' +
  '.br4 { border-radius: 1rem; }\n'

  const actual = generateBorders(t.context.config)
  const expected = mockCss

  t.is(actual, expected)
})

test('generateBorders returns a correct css string with prefix', t => {
  const mockCss = '' +
  '.foo-b--dotted { border-style: dotted; }\n' +
  '.foo-b--dashed { border-style: dashed; }\n' +
  '.foo-b--solid { border-style: solid; }\n' +
  '.foo-bw1 { border-width: 0.125rem; }\n' +
  '.foo-bw2 { border-width: 0.25rem; }\n' +
  '.foo-bw3 { border-width: 0.5rem; }\n' +
  '.foo-bw4 { border-width: 1rem; }\n' +
  '.foo-bw5 { border-width: 2rem; }\n' +
  '.foo-br1 { border-radius: 0.125rem; }\n' +
  '.foo-br2 { border-radius: 0.25rem; }\n' +
  '.foo-br3 { border-radius: 0.5rem; }\n' +
  '.foo-br4 { border-radius: 1rem; }\n'

  const actual = generateBorders(t.context.config, 'foo-')
  const expected = mockCss

  t.is(actual, expected)
})

test('generateBorders returns a correct css string with included static styles', t => {
  const mockCss = '' +
  '.b--dotted { border-style: dotted; }\n' +
  '.b--dashed { border-style: dashed; }\n' +
  '.b--solid { border-style: solid; }\n' +
  '.bw1 { border-width: 0.125rem; }\n' +
  '.bw2 { border-width: 0.25rem; }\n' +
  '.bw3 { border-width: 0.5rem; }\n' +
  '.bw4 { border-width: 1rem; }\n' +
  '.bw5 { border-width: 2rem; }\n' +
  '.br1 { border-radius: 0.125rem; }\n' +
  '.br2 { border-radius: 0.25rem; }\n' +
  '.br3 { border-radius: 0.5rem; }\n' +
  '.br4 { border-radius: 1rem; }\n'

  const actual = generateBorders(t.context.config)
  const expected = mockCss

  t.is(actual, expected)
})

test('generateColors retuns a correct css string without prefix', t => {
  const mockCss = t.context.config.variables.colors.map(c => {
    return '' +
      `.${c.name} { color: ${c.value}; }\n` +
      `.bg-${c.name} { background-color: ${c.value}; }\n` +
      `.b--${c.name} { border-color: ${c.value}; }\n`
  }).join('')

  const actual = generateColors(t.context.config)
  const expected = mockCss

  t.is(actual, expected)
})

test('generateColors retuns a correct css string with prefix', t => {
  const mockCss = t.context.config.variables.colors.map(c => {
    return '' +
      `.foo-${c.name} { color: ${c.value}; }\n` +
      `.foo-bg-${c.name} { background-color: ${c.value}; }\n` +
      `.foo-b--${c.name} { border-color: ${c.value}; }\n`
  }).join('')

  const actual = generateColors(t.context.config, 'foo-')
  const expected = mockCss

  t.is(actual, expected)
})

test('generateSpacing retuns a correct css string without prefix', t => {
  const { spacing } = t.context.config.variables
  const mockCss = spacing.values.map((value, i) => {
    return '' +
      `.ma${i} { margin: ${value}${spacing.unit}; }\n` +
      `.mv${i} { margin-top: ${value}${spacing.unit}; margin-bottom: ${value}${spacing.unit}; }\n` +
      `.mh${i} { margin-left: ${value}${spacing.unit}; margin-right: ${value}${spacing.unit}; }\n` +
      `.mt${i} { margin-top: ${value}${spacing.unit}; }\n` +
      `.mb${i} { margin-bottom: ${value}${spacing.unit}; }\n` +
      `.ml${i} { margin-left: ${value}${spacing.unit}; }\n` +
      `.mr${i} { margin-right: ${value}${spacing.unit}; }\n`
  }).join('')

  const actual = generateSpacing(t.context.config)
  const expected = mockCss

  t.is(actual, expected)
})

test('generateSpacing retuns a correct css string with prefix', t => {
  const { spacing } = t.context.config.variables
  const mockCss = spacing.values.map((value, i) => {
    return '' +
      `.foo-ma${i} { margin: ${value}${spacing.unit}; }\n` +
      `.foo-mv${i} { margin-top: ${value}${spacing.unit}; margin-bottom: ${value}${spacing.unit}; }\n` +
      `.foo-mh${i} { margin-left: ${value}${spacing.unit}; margin-right: ${value}${spacing.unit}; }\n` +
      `.foo-mt${i} { margin-top: ${value}${spacing.unit}; }\n` +
      `.foo-mb${i} { margin-bottom: ${value}${spacing.unit}; }\n` +
      `.foo-ml${i} { margin-left: ${value}${spacing.unit}; }\n` +
      `.foo-mr${i} { margin-right: ${value}${spacing.unit}; }\n`
  }).join('')

  const actual = generateSpacing(t.context.config, 'foo-')
  const expected = mockCss

  t.is(actual, expected)
})
