const test = require('ava')
const fs = require('fs').promises
const path = require('path')

const { appendOutput, cleanOutput, readConfig } = require('../lib/io')

test.beforeEach(async t => {
  t.context.config = await fs.readFile(path.resolve(__dirname, '../config.json'), { encoding: 'utf8' })
    .then(JSON.parse)
  t.context.config.filename = 'mockOutput.css'
})

test.afterEach(async t => {
  const access = await fs.access(path.resolve(__dirname, '../', t.context.config.filename))
    .then(() => true)
    .catch(() => false)

  if (access) {
    await fs.unlink(path.resolve(__dirname, '../', t.context.config.filename))
  }
})

test.serial('appendOutput should write to file', async t => {
  await fs.writeFile(path.resolve(__dirname, '../', t.context.config.filename), '')
  await appendOutput(t.context.config, 'hello world')

  const actual = await fs.readFile(path.resolve(__dirname, '../', t.context.config.filename), { encoding: 'utf8' })
  const expected = 'hello world'

  t.is(actual, expected)
})

test.serial('appendOutput throws on unable to write file', async t => {
  t.context.config.filename = '\\/\\/'

  await t.throwsAsync(appendOutput(t.context.config, ''), { instanceOf: Error })
})

test.serial('cleanOutput removes content in exisiting file', async t => {
  await fs.writeFile(path.resolve(__dirname, '../', t.context.config.filename), 'hello world')
  await cleanOutput(t.context.config)

  const actual = await fs.readFile(path.resolve(__dirname, '../', t.context.config.filename), { encoding: 'utf8' })
  const expected = ''

  t.is(actual, expected)
})

test.serial('cleanOutput throws on unable to write/clean file', async t => {
  t.context.config.filename = '/ \\\\ '
  await t.throwsAsync(cleanOutput(t.context.config), { instanceOf: Error })
})

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

test('readConfig throws on invalid filename', async t => {
  await t.throwsAsync(readConfig('nonExistingConfig.json'), { instanceOf: Error })
})

test.serial('cleanOutput returns config', async t => {
  const actual = await cleanOutput(t.context.config)
  const expected = t.context.config

  t.is(actual, expected)
})

test.todo('parseConfigComponent')
test.todo('parseConfigElement')
