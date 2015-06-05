// Gulp Dependencies
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    livereload = require('gulp-livereload')

//Parse styles
gulp.task('style', function() {
    gulp.src('src/sass/**/*.scss')
        .pipe(concat('style.scss'))
        .pipe(sass({
            errorLogToConsole: true
        }))
        .pipe(gulp.dest('./css/'))
        .pipe(minifyCss())
        .pipe(rename(function(path) {
            path.extname = ".min.css";
        }))
        .pipe(gulp.dest('./css/'))
        .pipe(livereload())
});

//Parse scripts
gulp.task('script', function() {
    gulp.src('src/js/**/*.js')
        .pipe(concat('script.js'))
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(gulp.dest('./js/'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(rename(function(path) {
            path.extname = ".min.js";
        }))
        .pipe(gulp.dest('./js/'))
        .pipe(livereload())
});

//Build everything
gulp.task('build', ['style', 'script']);

//Watch and livereload everything
gulp.task('default', function() {
    livereload.listen();
    gulp.watch('src/sass/**/*.scss',['style']);
    gulp.watch('src/js/**/*.js',['script']);
    gulp.watch('*.html').on('change', function(file) {
        livereload.changed(file.path);
    });
});