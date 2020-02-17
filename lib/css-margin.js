exports.generateMargin = function (config, prefix = '') {
  let str = ''
  const { margin } = config.variables

  margin.forEach((value, i) => {
    str += `.${prefix}ma${i} { margin: ${value}; }\n`
    str += `.${prefix}mv${i} { margin-top: ${value}; margin-bottom: ${value}; }\n`
    str += `.${prefix}mh${i} { margin-left: ${value}; margin-right: ${value}; }\n`
    str += `.${prefix}mt${i} { margin-top: ${value}; }\n`
    str += `.${prefix}mb${i} { margin-bottom: ${value}; }\n`
    str += `.${prefix}ml${i} { margin-left: ${value}; }\n`
    str += `.${prefix}mr${i} { margin-right: ${value}; }\n`
  })

  return str
}
