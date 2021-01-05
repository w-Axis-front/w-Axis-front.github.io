let path = require('path');

const app = '';

module.exports = {
  PATH: {
    app: `./${app}`,
    relativeApp: `${path.resolve()}/${app}`,
  },

  // Server
  server: {
    server: {
      baseDir: `./${app}/`,
    },
    port: 3000,
    notify: true
  },
}
