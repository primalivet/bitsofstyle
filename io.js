const fs = require('fs').promises
const path = require('path')

exports.readConfig = function (filename) {
  return fs.readFile(path.resolve(__dirname, filename))
    .then(JSON.parse)
    .catch(() => {
      throw new Error(`Could not read config ${filename}`)
    })
}

exports.cleanOutput = function (filename) {
  return fs.writeFile(path.resolve(__dirname, filename), '', { encoding: 'utf8' })
    .then(() => filename)
    .catch(() => {
      throw new Error(`Could not clean file ${filename}`)
    })
}

exports.makeAppendOutput = function (filename) {
  return function (content) {
    return fs.appendFile(path.resolve(__dirname, filename), content)
      .then(() => filename)
      .catch(() => {
        throw new Error(`Could not append to file ${filename}`)
      })
  }
}
