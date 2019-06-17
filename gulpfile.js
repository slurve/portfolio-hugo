const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleanCss = require('gulp-clean-css');

function js() {
  return src('./js/main.js')
    .pipe(concat('app.min.js'))
    .pipe(concat('app.js'))
    .pipe(dest('static/js'))
    .pipe(rename('app.min.js'))
    .pipe(uglify())
    .pipe(dest('static/js'));
}

function css() {
  return src('./scss/**/*.?(s)css')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(dest('static/css'))
    .pipe(rename('app.min.css'))
    .pipe(cleanCss())
    .pipe(dest('static/css'));
}

exports.js = js;
exports.css = css;
exports.default = parallel(css, js);