const express = require('express')

module.exports = function (config) {
  const router = config.auth.router
  router.use('/', express.static(`${__dirname}/../static`))
}
