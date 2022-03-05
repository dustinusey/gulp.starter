const { src, dest, watch, series } = require('gulp');

const scssCompile = require('gulp-sass')(require('sass'));
const addPrefixer = require('gulp-autoprefixer');
const minifyCss = require('gulp-clean-css');
const minifyJs = require('gulp-terser');

const styles = () => {
    return src('./frontend/src/styles/**/*.scss')
        .pipe(scssCompile())
        .pipe(addPrefixer('last 2 versions'))
        .pipe(minifyCss())
        .pipe(dest('./frontend/dist/styles'))
}

const scripts = () => {
    return src('./frontend/src/scripts/**/*.js')
    .pipe(minifyJs())
    .pipe(dest('./frontend/dist/scripts/'))
}

const watchTask = () => {
    watch('./frontend/src/styles/**/*.scss', styles)
    watch('./frontend/src/scripts/**/*.js', scripts)
}

exports.default = series (styles, scripts, watchTask);