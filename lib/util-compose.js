exports.compose = function (...fs) {
  return function (x) {
    return fs.reduceRight((g, f) => f(g), x)
  }
}
