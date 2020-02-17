const curry = function (f) {
  return function (...args) {
    if (args.length < f.length) {
      return function (...moreArgs) {
        curry(...args, ...moreArgs)
      }
    } else {
      f(...args)
    }
  }
}

exports.curry = curry
