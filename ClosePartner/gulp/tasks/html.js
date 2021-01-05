// ---- REQUIRED GLOBAL FILES
const
   {PATH} = require(`../config`),
   {watch} = require('gulp');
// ---- Server
const {browserSync} = require('./server');

// ---- Task customization
let options = {
   watchFiles: `${PATH.app}*.html`,
}

// ---- Watcher
function htmlWatcher () {
   watch(options.watchFiles).on('change', browserSync.reload);;
}

// ---- Export logic
module.exports = {htmlWatcher}
