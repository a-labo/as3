/**
 * @class AS3
 */
'use strict'

const co = require('co')
const s3 = require('s3')
const { EventEmitter } = require('events')

/** @lends AS3 */
class AS3 extends EventEmitter {
  constructor (config = {}) {
    super()
    const s = this
    let {
      accessKeyId,
      secretAccessKey,
      endpoint,
      bucket
    } = config
    s.bucket = bucket
    s.client = s3.createClient({
      s3Options: {
        accessKeyId,
        secretAccessKey,
        endpoint
      }
    })
  }

  /**
   * Upload directory into s3
   * @param {string} dirname - Directory to sync
   * @parma {Object} options - Optional settings
   * @returns {Promise}
   */
  uploadDir (dirname, options = {}) {
    const s = this
    let { prefix } = options
    return co(function * () {
      let startAt = new Date()
      let { bucket, client } = s
      let uploader = client.uploadDir({
        localDir: dirname,
        s3Params: {
          Bucket: bucket,
          Prefix: prefix
        }
      })

      return new Promise((resolve, reject) => {
        uploader.on('error', (err) => {
          reject(err)
        })
        uploader.on('progress', () => {
          let { progressAmount: amount, progressTotal: total } = uploader
          let took = new Date() - startAt
          s.emit('progress', { amount, total, took })
        })
        uploader.on('end', () => {
          resolve()
        })
      })
    })
  }
}

module.exports = AS3
