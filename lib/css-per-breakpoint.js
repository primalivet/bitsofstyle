exports.perBreakpoint = function (config, ...fns) {
  let str = ''
  const { breakpoint } = config.variables

  str += fns.map(fn => fn(config)).join('')
  str += breakpoint.map(bp => {
    let str = ''
    str += `@media screen and (min-width: ${bp.value}) {\n`
    str += fns.map(fn => fn(config, bp.prefix)).join('')
    str += '}\n'

    return str
  }).join('')

  return str
}
