const assert = require('assert')
const { getRandomLetter, replace } = require('../src/lib')

describe('getRandomLetter', function () {
  it('should return a string', function () {
    assert.strictEqual(typeof getRandomLetter('asd'), 'string')
    assert.strictEqual(typeof getRandomLetter('234'), 'string')
    assert.strictEqual(typeof getRandomLetter('ert123%^&'), 'string')
  })

  it('should return a value from param', function () {
    assert.strictEqual('asd'.includes(getRandomLetter('asd')), true)
    assert.strictEqual('234'.includes(getRandomLetter('234')), true)
    assert.strictEqual('ert123%^&'.includes(getRandomLetter('ert123%^&')), true)
  })
})

describe('replace', function () {
  it('should return a string', function () {
    assert.strictEqual(typeof replace('t', 0, 'p'), 'string')
    assert.strictEqual(typeof replace('test', 3, '?'), 'string')
    assert.strictEqual(typeof replace('test', 2, 'p'), 'string')
  })

  it('should replace letter at index', function () {
    assert.strictEqual(replace('t', 0, 'p'), 'p')
    assert.strictEqual(replace('test', 0, '2'), '2est')
    assert.strictEqual(replace('test', 3, '?'), 'tes?')
    assert.strictEqual(replace('test', 2, 'p'), 'tept')
  })
})
