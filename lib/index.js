/**
 * Async aws s3 client
 * @module as3
 */

'use strict'

const create = require('./create')
const AS3 = require('./as3')

let lib = create.bind(this)

Object.assign(lib, AS3, {
  create,
  AS3
})

module.exports = lib
