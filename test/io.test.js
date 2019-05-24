const test = require('ava')
const fs = require('fs').promises
const path = require('path')
const { readConfig, cleanOutput, makeAppendOutput } = require('../io.js')

test('readConfig returns promise', async t => {
  const actual = typeof readConfig('config.json').then
  const expected = 'function'

  t.is(actual, expected)
})

test('readConfig resolves to object', async t => {
  const actual = typeof await readConfig('config.json')
  const expected = 'object'

  t.is(actual, expected)
})

test('readConfig rejects with an error invalid path', async t => {
  await t.throwsAsync(readConfig('nonExistingConfig.json'), { instanceOf: Error, message: 'Could not read config nonExistingConfig.json' })
})

test('cleanOutput returns filename', async t => {
  // cleanOutput side effect creates a new file outputFile1 in project root dir
  const actual = await cleanOutput('outputFile1')
  const expected = 'outputFile1'

  // remove outputFile1 file in project root dir
  await fs.unlink(path.resolve(__dirname, '../outputFile1'))

  t.is(actual, expected)
})

test('cleanOutput removes content in exisiting file', async t => {
  // create a sample file 'outputFile2' with content in the project root dir
  await fs.writeFile(path.resolve(__dirname, '../outputFile2'), 'hello world')
  // clean/overwrite the sample file
  await cleanOutput('outputFile2')

  // read the content from the sample file
  const actual = await fs.readFile(path.resolve(__dirname, '../outputFile2'), { encoding: 'utf8' })
  const expected = ''

  // remove sample file in the project root dir
  await fs.unlink(path.resolve(__dirname, '../outputFile2'))

  t.is(actual, expected)
})

test('cleanOutput throws on unable to write/clean file', async t => {
  // try to clean unexisting file with forbidden filename chars
  await t.throwsAsync(cleanOutput('\\/\\ '), { instanceOf: Error })
})

test('makeAppendOutput returns function', t => {
  const actual = typeof makeAppendOutput('foobar')
  const expected = 'function'

  t.is(actual, expected)
})

test('makeAppendOutput should write to file', async t => {
  // create appendOutput function
  const appendOutput = makeAppendOutput('outputFile3')
  // add content of create a new file with content 'hello world'
  await appendOutput('hello world')

  // read the sample file in the project root dir
  const actual = await fs.readFile(path.resolve(__dirname, '../outputFile3'), { encoding: 'utf8' })
  const expected = 'hello world'

  // remove sample file in project root dir
  await fs.unlink(path.resolve(__dirname, '../outputFile3'))

  t.is(actual, expected)
})

test('makeAppendOutput throws on unable to write file', async t => {
  // try to clean unexisting file with forbidden filename chars
  await t.throwsAsync(makeAppendOutput('\\/\\ ')(''), { instanceOf: Error })
})
