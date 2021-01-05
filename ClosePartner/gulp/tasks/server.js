const browserSync = require('browser-sync').create();
const config = require('../config');

const server = function server () {
  browserSync.init(config.server);
}

module.exports = {server, browserSync};

