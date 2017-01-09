'use strict'

const as3 = require('as3')
const co = require('co')

co(function * () {
  let client = as3({
    accessKeyId: 'your_access_key_id',
    secretAccessKey: 'your_secret_access_key',
    endpoint: 's3-ap-northeast-1.amazonaws.com'
  })
  yield client.uploadDir('./shared/public')
})
