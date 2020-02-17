exports.generateBorderStyle = function (config, prefix = '') {
  const { style } = config.variables.border
  let str = ''

  style.forEach(s => {
    str += `.${prefix}b--${s} { border-style: ${s}; }\n`
  })

  return str
}

