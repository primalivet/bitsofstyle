exports.generatePadding = function (config, prefix = '') {
  let str = ''
  const { padding } = config.variables

  padding.forEach((value, i) => {
    str += `.${prefix}pa${i} { padding: ${value}; }\n`
    str += `.${prefix}pv${i} { padding-top: ${value}; padding-bottom: ${value}; }\n`
    str += `.${prefix}ph${i} { padding-left: ${value}; padding-right: ${value}; }\n`
    str += `.${prefix}pt${i} { padding-top: ${value}; }\n`
    str += `.${prefix}pb${i} { padding-bottom: ${value}; }\n`
    str += `.${prefix}pl${i} { padding-left: ${value}; }\n`
    str += `.${prefix}pr${i} { padding-right: ${value}; }\n`
  })

  return str
}
