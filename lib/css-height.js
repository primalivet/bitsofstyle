exports.generateHeight = function(config, prefix = '') {
  const { scale, base, count } = config.variables.height
  let str = ''
  let sizes = [base]

  for (let i = 0; i < count - 1; i++) {
    sizes.push(sizes[sizes.length - 1] * scale)
  }

  sizes.forEach((value, i) => {
    const valueAsRem = Number.parseFloat(value / 16).toFixed(4)
    str += `.${prefix}h${i + 1} { height: ${valueAsRem}rem; }\n`
  })

  return str
}

exports.staticHeight = function(config, prefix = '') {
  return `.h-auto { height: auto; }\n` +

        `.h-10 { height: 10%; }\n` +
        `.h-20 { height: 20%; }\n` +
        `.h-25 { height: 25%; }\n` +
        `.h-30 { height: 30%; }\n` +
        `.h-33 { height: 33.3333%; }\n` +
        `.h-40 { height: 40%; }\n` +
        `.h-50 { height: 50%; }\n` +
        `.h-60 { height: 60%; }\n` +
        `.h-66 { height: 66.6666%; }\n` +
        `.h-70 { height: 70%; }\n` +
        `.h-75 { height: 75%; }\n` +
        `.h-80 { height: 80%; }\n` +
        `.h-90 { height: 90%; }\n` +
        `.h-100 { height: 100%; }\n` +

        `.vh-10 { height: 10vh; }\n` +
        `.vh-20 { height: 20vh; }\n` +
        `.vh-25 { height: 25vh; }\n` +
        `.vh-30 { height: 30vh; }\n` +
        `.vh-33 { height: 33.3333vh; }\n` +
        `.vh-40 { height: 40vh; }\n` +
        `.vh-50 { height: 50vh; }\n` +
        `.vh-60 { height: 60vh; }\n` +
        `.vh-66 { height: 66.6666vh; }\n` +
        `.vh-70 { height: 70vh; }\n` +
        `.vh-75 { height: 75vh; }\n` +
        `.vh-80 { height: 80vh; }\n` +
        `.vh-90 { height: 90vh; }\n` +
        `.vh-100 { height: 100vh; }\n` 
}
