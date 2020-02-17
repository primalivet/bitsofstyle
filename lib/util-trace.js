exports.trace = function (label) {
  return function (value) {
    console.log(label, value)
    return value
  }
}
