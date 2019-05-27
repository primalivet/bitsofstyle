exports.compose = function (...fs) {
  return function (x) {
    return fs.reduceRight((g, f) => f(g), x)
  }
}

exports.log = function (label) {
  return function (value) {
    console.log(label)
    return value
  }
}

exports.trace = function (label) {
  return function (value) {
    console.log(label, value)
    return value
  }
}
