exports.generateColor = function (config, prefix = '') {
  let str = ''
  const { color } = config.variables

  color.forEach(({ name, value }) => {
    str += `.${prefix}${name} { color: ${value}; }\n`
  })

  return str
}

exports.staticColor = function(config, prefix = '') {
  return `.${prefix}transparent { color: transparent; }\n`
}
