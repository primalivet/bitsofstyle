exports.staticBackgroundSize = function(config, prefix = '') {
  return  `.${prefix}bg-contain { background-size: contain; }\n` +
          `.${prefix}bg-cover { background-size: cover; }\n`
}
