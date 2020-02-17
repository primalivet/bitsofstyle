exports.generateFontSize = function (config, prefix = '') {
  const { base, scale, count, basePosition, unit } = config.variables.font.size
  let str = ''
  let sizes = [base]

  const countUp = basePosition - 1
  const countDown = count - basePosition

  for (let i = 0; i < countUp; i++) {
    sizes.unshift(sizes[0] * scale)
  }

  for (let i = 0; i < countDown; i++) {
    sizes.push(sizes[sizes.length - 1] / scale)
  }
  sizes.forEach((value, i) => {
      const valueAsRem = Number.parseFloat(value / 16).toFixed(4)
      str += `.${prefix}f${i + 1} { font-size: ${valueAsRem}rem; }\n`
  })

  return str
}
