exports.generateBorderRadius = function (config, prefix = '') {
  const { radius } = config.variables.border
  let str = ''

  radius.forEach((r, i) => {
    str += `.${prefix}br${i + 1} { border-radius: ${r}; }\n`
    str += `.${prefix}br${i + 1}--top { border-top-left-radius: ${r}; border-top-right-radius: ${r}; }\n`
    str += `.${prefix}br${i + 1}--bottom { border-bottom-left-radius: ${r}; border-bottom-right-radius: ${r}; }\n`
    str += `.${prefix}br${i + 1}--left { border-top-left-radius: ${r}; border-bottom-left-radius: ${r}; }\n`
    str += `.${prefix}br${i + 1}--right { border-top-right-radius: ${r}; border-bottom-right-radius: ${r}; }\n`
  })

  return str
}

exports.staticBorderRadius = function(config, prefix = '') {
  return `.${prefix}br-pill { border-radius: 9999px; }\n` +
        `.${prefix}br-circle { border-radius: 100%; }\n`
}
