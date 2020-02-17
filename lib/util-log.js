exports.log = function (label) {
  return function (value) {
    console.log(label)
    return value
  }
}
