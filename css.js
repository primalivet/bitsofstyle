exports.perBreakpoint = function (config, fn) {
  let str = ''

  str += fn(config)
  str += config.variables.breakpoints.map(breakpoint => {
    let str = ''
    str += `@media screen and (min-width: ${breakpoint.value}) {\n`
    str += fn(config, breakpoint.prefix)
    str += '}\n'

    return str
  }).join('')

  return str
}

exports.generateBorders = function (config, prefix = '') {
  const { border } = config.variables
  let str = ''

  border.styles.forEach(style => {
    str += `.${prefix}b--${style} { border-style: ${style}; }\n`
  })

  border.width.values.forEach((value, i) => {
    str += `.${prefix}bw${i + 1} { border-width: ${value}${border.width.unit}; }\n`
  })

  border.radius.values.forEach((value, i) => {
    str += `.${prefix}br${i + 1} { border-radius: ${value}${border.radius.unit}; }\n`
  })

  return str
}

exports.generateColors = function (config, prefix = '') {
  let str = ''

  config.variables.colors.forEach(c => {
    str += `.${prefix}${c.name} { color: ${c.value}; }\n`
    str += `.${prefix}bg-${c.name} { background-color: ${c.value}; }\n`
    str += `.${prefix}b--${c.name} { border-color: ${c.value}; }\n`
  })

  return str
}

exports.generateSpacing = function (config, prefix = '') {
  let str = ''
  const { unit, values } = config.variables.spacing

  values.forEach((value, i) => {
    str += `.${prefix}ma${i} { margin: ${value}${unit}; }\n`
    str += `.${prefix}mv${i} { margin-top: ${value}${unit}; margin-bottom: ${value}${unit}; }\n`
    str += `.${prefix}mh${i} { margin-left: ${value}${unit}; margin-right: ${value}${unit}; }\n`
    str += `.${prefix}mt${i} { margin-top: ${value}${unit}; }\n`
    str += `.${prefix}mb${i} { margin-bottom: ${value}${unit}; }\n`
    str += `.${prefix}ml${i} { margin-left: ${value}${unit}; }\n`
    str += `.${prefix}mr${i} { margin-right: ${value}${unit}; }\n`
  })

  return str
}
