const path = require('path')
const fs = require('fs').promises
const test = require('ava')

const { generateBackgroundColor, staticBackgroundColor } = require('../lib/css-background-color')
const { staticBackgroundPosition } = require('../lib/css-background-position')
const { staticBackgroundSize } = require('../lib/css-background-size')
const { generateBorder } = require('../lib/css-border')
const { generateBorderColor } = require('../lib/css-border-color')
const { generateBorderRadius, staticBorderRadius } = require('../lib/css-border-radius') 
const { generateBorderStyle } = require('../lib/css-border-style') 
const { generateBorderWidth } = require('../lib/css-border-width') 
const { generateBoxShadow } = require('../lib/css-box-shadow') 
const { generateColor, staticColor } = require('../lib/css-color') 
const { staticFlexbox } = require('../lib/css-flexbox') 
const { generateFontFamily } = require('../lib/css-font-family') 
const { generateFontSize } = require('../lib/css-font-size') 
const { generateFontWeight } = require('../lib/css-font-weight') 
const { generateHeight, staticHeight } = require('../lib/css-height')
const { generateMargin } = require('../lib/css-margin') 
const { generateMaxWidth, staticMaxWidth } = require('../lib/css-max-width') 
const { generateOpacity } = require('../lib/css-opacity') 
const { generatePadding } = require('../lib/css-padding') 
const { staticPosition } = require('../lib/css-position') 
const { generateWidth, staticWidth } = require('../lib/css-width') 
const { perBreakpoint } = require('../lib/css-per-breakpoint') 

test.beforeEach('load default config', async t => {
  const configPath = path.resolve(__dirname, '../config.json')

  t.context.config = await fs.readFile(configPath, { encoding: 'utf8' })
    .then(JSON.parse)
})

test.afterEach(t => {
  delete t.context.config
})

/*
 * Background
 */
test('generateBackgroundColor without prefix',
  t => t.snapshot(generateBackgroundColor(t.context.config)))

/*
 * Borders
 */
test('generateBorder without prefix', 
  t => t.snapshot(generateBorder(t.context.config)))

test('generateBorder with prefix', t => 
  t.snapshot(generateBorder(t.context.config, 'foo-')))

/*
 * Borders color
 */
test('generateBorderColor without prefix', 
  t => t.snapshot(generateBorderColor(t.context.config)))

test('generateBorderColor with prefix', t => 
  t.snapshot(generateBorderColor(t.context.config, 'foo-')))

/*
 * Borders radius
 */
test('generateBorderRadius without prefix', 
  t => t.snapshot(generateBorderRadius(t.context.config)))

test('generateBorderRadius with prefix', t => 
  t.snapshot(generateBorderRadius(t.context.config, 'foo-')))

test('staticBorderRadius without prefix', 
  t => t.snapshot(staticBorderRadius(t.context.config)))

test('staticBorderRadius with prefix', t => 
  t.snapshot(staticBorderRadius(t.context.config, 'foo-')))

/*
 * Borders style
 */
test('generateBorderStyle without prefix', 
  t => t.snapshot(generateBorderStyle(t.context.config)))

test('generateBorderStyle with prefix', t => 
  t.snapshot(generateBorderStyle(t.context.config, 'foo-')))

/*
 * Borders width
 */
test('generateBorderWidth without prefix', 
  t => t.snapshot(generateBorderWidth(t.context.config)))

test('generateBorderWidth with prefix', t => 
  t.snapshot(generateBorderWidth(t.context.config, 'foo-')))

/*
 * Box shadow
 */
test('generateBoxShadow without prefix', 
  t => t.snapshot(generateBoxShadow(t.context.config)))

test('generateBoxShadow with prefix', t => 
  t.snapshot(generateBoxShadow(t.context.config, 'foo-')))

/*
 * Color
 */
test('generateColor widthout prefix', t => 
  t.snapshot(generateColor(t.context.config)))

test('generateColor width prefix', t => 
  t.snapshot(generateColor(t.context.config, 'foo-')))

test('staticColor widthout prefix', t => 
  t.snapshot(staticColor(t.context.config)))

test('staticColor width prefix', t => 
  t.snapshot(staticColor(t.context.config, 'foo-')))

/*
 * Flexbox
 */
test('staticFlexbox without prefix', t => 
  t.snapshot(staticFlexbox(t.context.config)))

test('staticFlexbox with prefix', 
  t => t.snapshot(staticFlexbox(t.context.config, 'foo-')))

/*
 * Font family
 */
test('generateFontFamily without prefix', t => 
  t.snapshot(generateFontFamily(t.context.config)))

test('generateFontFamily with prefix', 
  t => t.snapshot(generateFontFamily(t.context.config, 'foo-')))

/*
 * Font size
 */
test('generateFontSize without prefix', t => 
  t.snapshot(generateFontSize(t.context.config)))

test('generateFontSize with prefix', 
  t => t.snapshot(generateFontSize(t.context.config, 'foo-')))

/*
 * Font weight
 */
test('generateFontWeight without prefix', t => 
  t.snapshot(generateFontWeight(t.context.config)))

test('generateFontWeight with prefix', 
  t => t.snapshot(generateFontWeight(t.context.config, 'foo-')))

/*
 * Height
 */
test('generateHeight without prefix', t => 
  t.snapshot(generateHeight(t.context.config)))

test('generateHeight with prefix', t => 
  t.snapshot(generateHeight(t.context.config, 'foo-')))

test('staticHeight without prefix', t => 
  t.snapshot(staticHeight(t.context.config)))

test('staticHeight with prefix', t => 
  t.snapshot(staticHeight(t.context.config, 'foo-')))

/*
 * Margin
 */
test('generateMargin without prefix', t => 
  t.snapshot(generateMargin(t.context.config)))

test('generateMargin with prefix', t => 
  t.snapshot(generateMargin(t.context.config, 'foo-')))

/*
 * Max width
 */
test('generateMaxWidth widthout prefix', t => 
  t.snapshot(generateMaxWidth(t.context.config)))

test('generateMaxWidth width prefix', t => 
  t.snapshot(generateMaxWidth(t.context.config, 'foo-')))

test('staticMaxWidth widthout prefix', t => 
  t.snapshot(staticMaxWidth(t.context.config)))

test('staticMaxWidth width prefix', t => 
  t.snapshot(staticMaxWidth(t.context.config, 'foo-')))

/*
 * Opacities
 */
test('generateOpacity without prefix', t => 
  t.snapshot(generateOpacity(t.context.config)))

test('generateOpacity with prefix', t => 
  t.snapshot(generateOpacity(t.context.config, 'foo-')))

/*
 * Padding
 */
test('generatePadding without prefix', t => 
  t.snapshot(generatePadding(t.context.config)))

test('generatePadding with prefix', t => 
  t.snapshot(generatePadding(t.context.config, 'foo-')))

/*
 * Position
 */
test('staticPosition without prefix', t => 
  t.snapshot(staticPosition(t.context.config)))

test('staticPosition with prefix', t => 
  t.snapshot(staticPosition(t.context.config, 'foo-')))

/*
 * Width
 */
test('generateWidth without prefix', t => 
  t.snapshot(generateWidth(t.context.config)))

test('generateWidth with prefix', t => 
  t.snapshot(generateWidth(t.context.config, 'foo-')))

test('staticWidth without prefix', t => 
  t.snapshot(staticWidth(t.context.config)))

test('staticWidth with prefix', t => 
  t.snapshot(staticWidth(t.context.config, 'foo-')))

/*
 * Breakpoints
 */
test('perBreakpoint', 
  t => t.snapshot(perBreakpoint(t.context.config, ()=> '.test-class { display: inherit; }\n')))
