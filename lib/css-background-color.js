exports.generateBackgroundColor = function (config, prefix = '') {
  let str = ''
  const { color } = config.variables

  color.forEach(({ name, value }) => {
    str += `.${prefix}bg-${name} { background-color: ${value}; }\n`
  })

  return str
}

exports.staticBackgroundColor = function(config, prefix = '') {
  return `.${prefix}bg-transparent { background-color: transparent; }\n`
}
