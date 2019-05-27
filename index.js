const utils = require('./utils')
const io = require('./io')
const css = require('./css')

async function main () {
  console.log('Reading config')
  io.readConfig('config.json')
    .then(utils.log('Config loaded\nCleaning output file'))
    .then(io.cleanOutput)
    .then(utils.log('Output file cleaned\nGenerating borders'))
    .then(config => {
      const borderCss = css.perBreakpoint(config, css.generateBorders)
      console.log('Writing borders to output file')
      return io.appendOutput(config, borderCss)
    })
    .then(utils.log('Wrote borders successfully\nGenerating colors'))
    .then(config => {
      const colorCss = css.perBreakpoint(config, css.generateColors)
      console.log('Writing colors to output file')
      return io.appendOutput(config, colorCss)
    })
    .then(utils.log('Wrote colors successfully\nGenerating spacing'))
    .then(config => {
      const spacingCss = css.perBreakpoint(config, css.generateSpacing)
      console.log('Writing spacing to output file')
      return io.appendOutput(config, spacingCss)
    })
    .then(utils.log('Wrote spacing successfully\nDone'))
    .catch(err => console.log(err))
}

main()
