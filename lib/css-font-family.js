exports.generateFontFamily = function (config, prefix = '') {
  let str = ''
  const { family } = config.variables.font

  family.forEach(({ name, value }) => {
    str += `.${prefix}${name} { font-family: ${value}; }\n`
  })

  return str
}
