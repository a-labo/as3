/**
 * Test case for as3.
 * Runs with mocha.
 */
'use strict'

const AS3 = require('../lib/as3.js')
const assert = require('assert')
const co = require('co')

describe('as3', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('As3', () => co(function * () {
    let as3 = new AS3()
    assert.ok(as3)
  }))
})

/* global describe, before, after, it */
