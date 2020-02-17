exports.staticBackgroundPosition = function(config, prefix = '') {
  return  `.${prefix}bg-center { background-position: center center; }\n` +
          `.${prefix}bg-top { background-position: top center; }\n` +
          `.${prefix}bg-bottom { background-position: bottom center; }\n` +
          `.${prefix}bg-left { background-position: center left; }\n` +
          `.${prefix}bg-right { background-position: center right; }\n`
}
