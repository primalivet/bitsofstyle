const fs = require('fs').promises
const path = require('path')

exports.readConfig = function (filename) {
  return fs.readFile(path.resolve(__dirname, filename))
    .then(JSON.parse)
    .catch(() => {
      throw new Error(`Could not read config ${filename}`)
    })
}

exports.cleanOutput = function (config) {
  return fs.writeFile(path.resolve(__dirname, config.filename), '', { encoding: 'utf8' })
    .then(() => config)
    .catch(() => {
      throw new Error(`Could not clean file ${config.filename}`)
    })
}

exports.appendOutput = function (config, content) {
  return fs.appendFile(path.resolve(__dirname, config.filename), content)
    .then(() => config)
    .catch(() => {
      throw new Error(`Could not append to file ${config.filename}`)
    })
}
