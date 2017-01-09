/**
 * Create an AS3 instance
 * @function create
 */
'use strict'

const AS3 = require('./as3')

/** @lends create */
function create (...args) {
  return new AS3(...args)
}

module.exports = create
