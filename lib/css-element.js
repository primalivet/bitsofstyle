exports.generateElement = function(config) {
  const { element } = config
  let str = ''

  for(let key in element) {
    str += `${key} { ${element[key].css.toString()} }\n`
  }

  return str
}
