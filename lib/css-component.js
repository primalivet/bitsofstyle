exports.generateComponent = function(config, prefix = '') {
  const { component } = config
  let str = ''

  for(let key in component) {
    str += `.${prefix}${key} { ${component[key].css.toString()} }\n`
  }

  return str
}
