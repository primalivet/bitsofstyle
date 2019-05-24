exports.makePerBreakpoint = function (breakpoints) {
  if (!breakpoints) throw new Error('No argument')
  if (!Array.isArray(breakpoints)) throw new Error('Argument must be Array')
  if (!breakpoints.every(b => b.name && b.value)) throw new Error('Invalid breakpoints')

  return function (f, config) {
    if (!f || !config) throw new Error('Takes to arguments, first a function and second a config object')
    let str = ''

    str += f(config)
    str += breakpoints.map(breakpoint => {
      let str = ''
      str += `@media screen and (min-width: ${breakpoint.value}) {\n`
      str += f(config, breakpoint.name)
      str += '}\n'

      return str
    }).join('')

    return str
  }
}

exports.generateBorders = function (border, prefix = '') {
  if (!border) throw new Error('Missing argument')
  if (!border.styles || !border.width) throw new Error('Invalid argument')
  if (!Array.isArray(border.styles)) throw new Error('Styles must be Array')
  if (!(typeof border.width.unit === 'string')) throw new Error('Unit must be String')
  if (!Array.isArray(border.width.values)) throw new Error('Values must be Array')

  let str = ''
  prefix = prefix ? prefix + '-' : ''

  border.styles.forEach(style => {
    str += `.${prefix}b--${style} { border-style: ${style}; }\n`
  })

  const { values, unit } = border.width

  values.forEach((value, i) => {
    str += `.${prefix}bw${i + 1} { border-width: ${value}${unit}; }\n`
  })

  return str
}

exports.generateColors = function (colors, prefix = '') {
  if (!colors) return
  let str = ''
  prefix = prefix ? prefix + '-' : ''

  colors.forEach(c => {
    str += `.${prefix}${c.name}     {  color:             ${c.value};  }\n`
    str += `.${prefix}bg-${c.name}  {  background-color:  ${c.value};  }\n`
    str += `.${prefix}b--${c.name}  {  border-color:      ${c.value};  }\n`
  })

  return str
}

exports.generateSpacing = function (spacing, prefix = '') {
  if (!spacing) return
  let str = ''
  const { unit, values } = spacing
  prefix = prefix ? prefix + '-' : ''

  values.forEach((value, i) => {
    str += `.${prefix}ma${i}  {  margin:         ${value}${unit};  }\n`
    str += `.${prefix}mv${i}  {  margin-top:     ${value}${unit};  margin-bottom:  ${value}${unit};  }\n`
    str += `.${prefix}mh${i}  {  margin-left:    ${value}${unit};  margin-right:   ${value}${unit};  }\n`
    str += `.${prefix}mt${i}  {  margin-top:     ${value}${unit};  }\n`
    str += `.${prefix}mb${i}  {  margin-bottom:  ${value}${unit};  }\n`
    str += `.${prefix}ml${i}  {  margin-left:    ${value}${unit};  }\n`
    str += `.${prefix}mr${i}  {  margin-right:   ${value}${unit};  }\n`
  })

  return str
}
