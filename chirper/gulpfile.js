var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber');

gulp.task('browserify', function () {
    gulp.src('./src/main/javascript/main.js')
        .pipe(plumber())
        .pipe(browserify({
            transform: 'reactify',
            debug: true
        }))
        .pipe(concat('build.js'))
        .pipe(gulp.dest('./src/main/webapp/js/'));
});

gulp.task('css', function() {
    gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css'])
        .pipe(gulp.dest('./src/main/webapp/css/vendor/'));
});

gulp.task('watch', function () {
    gulp.watch('src/main/javascript/**/*.js', ['browserify']);
});

gulp.task('serve', ['browserify', 'css', 'watch']);