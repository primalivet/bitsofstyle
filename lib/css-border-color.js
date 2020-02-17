exports.generateBorderColor = function (config, prefix = '') {
  let str = ''
  const { color } = config.variables

  color.forEach(({ name, value }) => {
    str += `.${prefix}b--${name} { border-color: ${value}; }\n`
  })

  return str
}
