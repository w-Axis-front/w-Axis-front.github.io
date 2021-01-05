const {parallel} = require('gulp');

// Server
const { server } = require('./gulp/tasks/server')

// Tasks list
const {sassProd, sassWatcher} = require('./gulp/tasks/sass');
const {htmlWatcher} = require('./gulp/tasks/html');

// ---- Development project
exports.default = parallel(
   sassProd,
   sassWatcher,
   server,
   htmlWatcher
);
