exports.generateBorder = function (config, prefix = '') {
  const [ head ] = config.variables.border.width
  let str = ''

  str += `.${prefix}ba { border-style: solid; border-width: ${head}; }\n`
  str += `.${prefix}bt { border-top-style: solid; border-top-width: ${head}; }\n`
  str += `.${prefix}bb { border-bottom-style: solid; border-bottom-width: ${head}; }\n`
  str += `.${prefix}bl { border-left-style: solid; border-left-width: ${head}; }\n`
  str += `.${prefix}br { border-right-style: solid; border-right-width: ${head}; }\n`

  return str
}
