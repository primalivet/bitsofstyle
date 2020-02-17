exports.staticFlexbox = function(config, prefix = '') {
  return  `.${prefix}flex { display: flex; }\n` +
          `.${prefix}flex-wrap { flex-wrap: wrap; }\n` +
          `.${prefix}flex-wrap-reverse { flex-wrap: wrap-reverse; }\n` +
          `.${prefix}flex-column { flex-direction: column; }\n` +
          `.${prefix}flex-column-reverse { flex-direction: column-reverse; }\n` +

          `.${prefix}items-center { align-items: center; }\n` +
          `.${prefix}items-start { align-items: start; }\n` +
          `.${prefix}items-end { align-items: end; }\n` +

          `.${prefix}justify-center { justify-content: center; }\n` +
          `.${prefix}justify-between { justify-content: space-between; }\n` +
          `.${prefix}justify-around { justify-content: space-around; }\n`
}
