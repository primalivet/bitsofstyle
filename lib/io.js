const fs = require('fs').promises
const readline = require('readline')
const stream = require('stream')
const { createReadStream } = require('fs')
const path = require('path')

exports.appendOutput = function (config, ...content) {
  return fs.appendFile(path.resolve(__dirname, '../', config.filename), content.join('\n'))
    .then(() => config)
    .catch(() => {
      throw new Error(`Could not append to file ${config.filename}`)
    })
}

exports.cleanOutput = function (config) {
  return fs.writeFile(path.resolve(__dirname, '../', config.filename), '', { encoding: 'utf8' })
    .then(() => config)
    .catch(() => {
      throw new Error(`Could not clean file ${config.filename}`)
    })
}

exports.readConfig = function (filename) {
  return fs.readFile(path.resolve(__dirname, '../', filename))
    .then(JSON.parse)
    .catch(() => {
      throw new Error(`Could not read config ${filename}`)
    })
}

// TODO: combine with parseConfigComponent
exports.parseConfigElement = function(config) {
  const { element } = config
  return new Promise((resolve, reject) => {
    const instream = createReadStream(path.resolve(__dirname, '../', config.filename), { encoding: 'utf8' })
    const outstream = new stream();
    const rl = readline.createInterface(instream, outstream)

    rl.on('line', (line) => {
      if (!line.startsWith('@') && !line.startsWith('}')) {
        const [name, propValue] = line.replace(/}|;/g, '').split('{').map(x => x.trim())

        for (let comp in element) {
          if (element[comp].classes.includes(name.replace('.', ''))) {
            if (element[comp].css) {
              element[comp].css += `${propValue};`
            } else {
              element[comp].css = `${propValue};`
            }
          }
        }
      }
    })

    rl.on('close', () => {
      resolve(config)
    })

  })
}

exports.parseConfigComponent = function(config) {
  const { component } = config
  return new Promise((resolve, reject) => {
    const instream = createReadStream(path.resolve(__dirname, '../', config.filename), { encoding: 'utf8' })
    const outstream = new stream();
    const rl = readline.createInterface(instream, outstream)

    rl.on('line', (line) => {
      if (!line.startsWith('@') && !line.startsWith('}')) {
        const [name, propValue] = line.replace(/}|;/g, '').split('{').map(x => x.trim())

        for (let comp in component) {
          if (component[comp].classes.includes(name.replace('.', ''))) {
            if (component[comp].css) {
              component[comp].css += `${propValue};`
            } else {
              component[comp].css = `${propValue};`
            }
          }
        }
      }
    })

    rl.on('close', () => {
      resolve(config)
    })

  })
}
