'use strict'

var test = require('tape')
var fs = require('fs')
var path = require('path')

var download = require('../src')

test('Ensure ipfs gets downloaded', function (t) {
  t.plan(2)
  download(function () {
    fs.stat(path.resolve(__dirname, '../go-ipfs'), function (err, stats) {
      t.error(err, 'ipfs bin should stat without error')
      t.ok(stats, 'ipfs was downloaded')
    })
  })
})
