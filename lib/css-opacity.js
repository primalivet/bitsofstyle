exports.generateOpacity = function (config, prefix = '') {
  let str = ''
  const { opacity } = config.variables

  opacity.forEach(o => {
    str += `.${prefix}o-${o.toString().replace('.', '')} { opacity: ${o}; }\n`
  })

  return str
}
