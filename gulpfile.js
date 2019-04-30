var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');

var siteRoot = '/';
var cssFiles = 'scss/**/*.?(s)css';
var cssBuild = 'static/css';
var jsFiles = 'js/**/*.js';
var jsDest = 'static/js';

/* js */
gulp.task('js', function() {
  gulp.src([
    'js/main.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest(jsDest))
  .pipe(rename('app.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest(jsDest));
});

/* css */
gulp.task('css', function() {
  gulp.src(cssFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(gulp.dest(cssBuild))
    .pipe(rename('app.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest(cssBuild));
});

/* watch js and css */
gulp.task('watch', function () {
  gulp.watch(jsFiles, ['js']);
  gulp.watch(cssFiles, ['css']);
});

/* default task */
gulp.task('default', [ 'js', 'css' ]);