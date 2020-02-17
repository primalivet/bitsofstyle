exports.generateWidth = function(config, prefix = '') {
  const { scale, base, count } = config.variables.width
  let str = ''
  let sizes = [base]

  for (let i = 0; i < count - 1; i++) {
    sizes.push(sizes[sizes.length - 1] * scale)
  }

  sizes.forEach((value, i) => {
    const valueAsRem = Number.parseFloat(value / 16).toFixed(4)
    str += `.${prefix}w${i + 1} { width: ${valueAsRem}rem; }\n`
  })

  return str
}

exports.staticWidth = function(config, prefix = '') {
  return `.w-auto { width: auto; }\n` +

        `.w-10 { width: 10%; }\n` +
        `.w-20 { width: 20%; }\n` +
        `.w-25 { width: 25%; }\n` +
        `.w-30 { width: 30%; }\n` +
        `.w-33 { width: 33.3333%; }\n` +
        `.w-40 { width: 40%; }\n` +
        `.w-50 { width: 50%; }\n` +
        `.w-60 { width: 60%; }\n` +
        `.w-66 { width: 66.6666%; }\n` +
        `.w-70 { width: 70%; }\n` +
        `.w-75 { width: 75%; }\n` +
        `.w-80 { width: 80%; }\n` +
        `.w-90 { width: 90%; }\n` +
        `.w-100 { width: 100%; }\n` +

        `.vw-10 { width: 10vw; }\n` +
        `.vw-20 { width: 20vw; }\n` +
        `.vw-25 { width: 25vw; }\n` +
        `.vw-30 { width: 30vw; }\n` +
        `.vw-33 { width: 33.3333vw; }\n` +
        `.vw-40 { width: 40vw; }\n` +
        `.vw-50 { width: 50vw; }\n` +
        `.vw-60 { width: 60vw; }\n` +
        `.vw-66 { width: 66.6666vw; }\n` +
        `.vw-70 { width: 70vw; }\n` +
        `.vw-75 { width: 75vw; }\n` +
        `.vw-80 { width: 80vw; }\n` +
        `.vw-90 { width: 90vw; }\n` +
        `.vw-100 { width: 100vw; }\n`
}
