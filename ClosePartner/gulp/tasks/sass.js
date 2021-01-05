// ---- REQUIRED GLOBAL FILES
const
   {PATH} = require(`../config`),
   {src, dest, watch, parallel} = require('gulp');

// ---- Required gulp modules
const
   gSass = require('gulp-sass'),
   plumber = require('gulp-plumber'),
   sourcemaps = require('gulp-sourcemaps'),
   autoprefixer = require('gulp-autoprefixer'),
   shorthand = require('gulp-shorthand'),
   cleanCSS = require('gulp-clean-css'),
   gcmq = require('gulp-group-css-media-queries');

// ---- Server
const {browserSync} = require('./server');

// ---- Task customization
let options = {
   watchFiles: `${PATH.app}sass/**/*.scss`,
   tasksCustom: {
      sass: {
         outputStyle: 'expanded',
      },
      cleanCSS: {
         debug: true,
         compatibility: '*'
      }
   },
}

// ---- Production version
function sassProd () {
   return src(`${PATH.relativeApp}/sass/style.scss`)
      .pipe(sourcemaps.init())
      .pipe(gSass({...options.tasksCustom.sass}).on('error', gSass.logError))
      .pipe(plumber())
      .pipe(autoprefixer())
      .pipe(shorthand())
      .pipe(gcmq())
      .pipe(cleanCSS({...options.tasksCustom.cleanCSS}))
      .pipe(sourcemaps.write('./'))
      .pipe(dest(`${PATH.relativeApp}/storage/css`))
      .pipe(browserSync.stream());
}

// ---- Watcher
function sassWatcher () {
   watch(options.watchFiles, sassProd);
}

// ---- Export logic
module.exports = {sassProd, sassWatcher}
