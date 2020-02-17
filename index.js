#!/use/bin/env node

const  {  appendOutput, cleanOutput, readConfig, parseConfigComponent, parseConfigElement }  =  require('./lib/io')
const  {  log                 }  =  require('./lib/util-log')

const { generateBackgroundColor, staticBackgroundColor      }  =  require('./lib/css-background-color')
const { generateBorder     }  =  require('./lib/css-border')
const { generateBorderColor     }  =  require('./lib/css-border-color')
const { generateBorderRadius, staticBorderRadius     }  =  require('./lib/css-border-radius')
const { generateBorderStyle     }  =  require('./lib/css-border-style')
const { generateBorderWidth     }  =  require('./lib/css-border-width')
const { generateBoxShadow  }  =  require('./lib/css-box-shadow')
const { generateComponent  }  =  require('./lib/css-component')
const { generateColor, staticColor      }  =  require('./lib/css-color')
const { generateElement       }  =  require('./lib/css-element')
const { staticFlexbox       }  =  require('./lib/css-flexbox')
const { generateFontSize       }  =  require('./lib/css-font-size')
const { generateFontWeight, staticFontWeight       }  =  require('./lib/css-font-weight')
const { generateFontFamily  }  =  require('./lib/css-font-family')
const { generateHeight, staticHeight     }  =  require('./lib/css-height')
const { generateMargin     }  =  require('./lib/css-margin')
const { generateMaxWidth, staticMaxWidth     }  =  require('./lib/css-max-width')
const { generateOpacity   }  =  require('./lib/css-opacity')
const { generatePadding     }  =  require('./lib/css-padding')
const { staticPosition     }  =  require('./lib/css-position')
const { generateWidth, staticWidth     }  =  require('./lib/css-width')
const { perBreakpoint       }  =  require('./lib/css-per-breakpoint')

async function main (args) {
  console.log(args)
  readConfig('config.json')
    // TODO read user config and merge, should come from CLI args
    .then(cleanOutput)
    .then(config => {
      const backgroundColor = perBreakpoint(config, generateBackgroundColor, staticBackgroundColor)
      return appendOutput(config, backgroundColor)
    })
    .then(config => {
      const border = perBreakpoint(config, generateBorder)
      const borderWidth = perBreakpoint(config, generateBorderWidth)
      const borderStyle = perBreakpoint(config, generateBorderStyle)
      const borderRadius = perBreakpoint(config, generateBorderRadius, staticBorderRadius)
      const borderColor = perBreakpoint(config, generateBorderColor)
      return appendOutput(config, border, borderWidth, borderStyle, borderRadius, borderColor)
    })
    .then(config => {
      const boxShadow = perBreakpoint(config, generateBoxShadow)
      return appendOutput(config, boxShadow)
    })
    .then(config => {
      const color = perBreakpoint(config, generateColor, staticColor)
      return appendOutput(config, color)
    })
    .then(config => {
      const flexbox = perBreakpoint(config, staticFlexbox)
      return appendOutput(config, flexbox)
    })
    .then(config => {
      const fontSize = perBreakpoint(config, generateFontSize)
      const fontWeight = perBreakpoint(config, generateFontWeight, staticFontWeight)
      const fontFamily = perBreakpoint(config, generateFontFamily)
      return appendOutput(config, fontSize, fontWeight, fontFamily)
    })
    .then(config => {
      const height = perBreakpoint(config, generateHeight, staticHeight)
      return appendOutput(config, height)
    })
    .then(config => {
      const margin = perBreakpoint(config, generateMargin)
      return appendOutput(config, margin)
    })
    .then(config => {
      const maxWidth = perBreakpoint(config, generateMaxWidth, staticMaxWidth)
      return appendOutput(config, maxWidth)
    })
    .then(config => {
      const opacity = perBreakpoint(config, generateOpacity)
      return appendOutput(config, opacity)
    })
    .then(config => {
      const padding = perBreakpoint(config, generatePadding)
      return appendOutput(config, padding)
    })
    .then(config => {
      const width = perBreakpoint(config, generateWidth, staticWidth)
      return appendOutput(config, width)
    })
    .then(config => {
      const position = perBreakpoint(config, staticPosition)
      return appendOutput(config, position)
    })
    // Elements
    .then(config => {
      return parseConfigElement(config)
    })
    .then((config)=> {
      const element = generateElement(config)
      return appendOutput(config, element)
    })
    // Components
    .then(config => {
      return parseConfigComponent(config)
    })
    .then((config)=> {
      const component = perBreakpoint(config, generateComponent)
      return appendOutput(config, component)
    })
    .catch(err => console.log(err))
}

const args = process.argv.slice(2)
main(args)
