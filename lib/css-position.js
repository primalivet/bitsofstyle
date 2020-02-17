exports.staticPosition = function(config, prefix = '') {
  return  `.${prefix}absolute { position: absolute; }\n` +
          `.${prefix}fixed { position: fixed; }\n` +
          `.${prefix}relative { position: relative; }\n` +
          `.${prefix}static { position: static; }\n`
} 
