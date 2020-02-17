exports.generateFontWeight = function (config, prefix = '') {
  let str = ''
  const { weight } = config.variables.font

  weight.forEach( value => {
    str += `.${prefix}fw-${value} { font-weight: ${value}; }\n`
  })

  return str
}

exports.staticFontWeight = function (config, prefix = '') {
  return `.${prefix}fw-bold { font-weight: bold; }\n` +
          `.${prefix}fw-normal { font-weight: normal; }\n`
}
