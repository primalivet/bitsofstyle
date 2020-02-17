exports.generateBoxShadow = function (config, prefix = '') {
  const { boxShadow } = config.variables
  let str = ''

  boxShadow.forEach((shadows, i) => {
    str += `.${prefix}shadow-${i + 1} { box-shadow: ${shadows.map(shadow => shadow).join(', ')}; }\n`
  })

  return str
}
