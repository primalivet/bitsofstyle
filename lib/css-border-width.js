exports.generateBorderWidth = function (config, prefix = '') {
  const { width } = config.variables.border
  let str = ''

  width.forEach((w, i) => {
    str += `.${prefix}bw${i + 1} { border-width: ${w}; }\n`
  })

  return str
}
