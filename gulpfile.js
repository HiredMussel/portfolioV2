// Require in needed packages
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
// variable pointing to compiler with settings defined in tsconfig.json
var tsproject = ts.createProject('tsconfig.json');

// Set up gulp to recognise the Babel JS transpiler
function compileTS(cb) {
    return tsproject.src()
        // Pipe the ts source code to the compiler
        .pipe(tsproject())
        .js.pipe(gulp.dest('dist/js'));
    cb();
}

// Sass compiler
function compileSass(cb) {
   return gulp.src('src/scss/styles.scss')
       .pipe(sourcemaps.init())
       .pipe(sass())
       .pipe(sourcemaps.write())
       .pipe(gulp.dest('dist/css'));
   cb();
}
// File watcher
function watch(cb) {
   gulp.watch("src/scss/**/*.scss", compileSass);
   gulp.watch("src/ts/*.ts", compileTS);
   cb();
}
exports.sass = compileSass;
exports.watch = watch;
exports.typescript = compileTS;