exports.generateMaxWidth = function(config, prefix = '') {
  const { scale, base, count } = config.variables.maxWidth
  let str = ''
  let sizes = [base]

  for (let i = 0; i < count - 1; i++) {
    sizes.push(sizes[sizes.length - 1] * scale)
  }

  sizes.forEach((value, i) => {
    const valueAsRem = Number.parseFloat(value / 16).toFixed(4)
    str += `.${prefix}mw${i + 1} { max-width: ${valueAsRem}rem; }\n`
  })

  return str
}

exports.staticMaxWidth = function(config, prefix = '') {
  return `.mw-none { max-width: none; }\n` +

        `.mw-10 { max-width: 10%; }\n` +
        `.mw-20 { max-width: 20%; }\n` +
        `.mw-25 { max-width: 25%; }\n` +
        `.mw-30 { max-width: 30%; }\n` +
        `.mw-33 { max-width: 33.3333%; }\n` +
        `.mw-40 { max-width: 40%; }\n` +
        `.mw-50 { max-width: 50%; }\n` +
        `.mw-60 { max-width: 60%; }\n` +
        `.mw-66 { max-width: 66.6666%; }\n` +
        `.mw-70 { max-width: 70%; }\n` +
        `.mw-75 { max-width: 75%; }\n` +
        `.mw-80 { max-width: 80%; }\n` +
        `.mw-90 { max-width: 90%; }\n` +
        `.mw-100 { max-width: 100%; }\n` +

        `.mvw-10 { max-width: 10vw; }\n` +
        `.mvw-20 { max-width: 20vw; }\n` +
        `.mvw-25 { max-width: 25vw; }\n` +
        `.mvw-30 { max-width: 30vw; }\n` +
        `.mvw-33 { max-width: 33.3333vw; }\n` +
        `.mvw-40 { max-width: 40vw; }\n` +
        `.mvw-50 { max-width: 50vw; }\n` +
        `.mvw-60 { max-width: 60vw; }\n` +
        `.mvw-66 { max-width: 66.6666vw; }\n` +
        `.mvw-70 { max-width: 70vw; }\n` +
        `.mvw-75 { max-width: 75vw; }\n` +
        `.mvw-80 { max-width: 80vw; }\n` +
        `.mvw-90 { max-width: 90vw; }\n` +
        `.mvw-100 { max-width: 100vw; }\n`
}
