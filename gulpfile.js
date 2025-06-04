const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Compilar SASS → CSS
function compilaSass() {
    return src('src/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(dest('dist/css'));
}

// Comprimir imagens
function comprimirImagens() {
    return src('src/images/**/*')
    .pipe(imagemin())
    .pipe(dest('dist/images'));
}

// Comprimir JS
function comprimirJS() {
    return src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(dest('dist/js'));
}

exports.default = parallel(compilaSass, comprimirImagens, comprimirJS);
