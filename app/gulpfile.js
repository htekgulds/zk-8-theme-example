var gulp = require('gulp'),
    connect = require('gulp-connect'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    port = process.env.port || 8080;

gulp.task('browserify', function () {
    gulp.src('./src/main/javascript/main.js')
        .pipe(browserify({
            transform: 'reactify'
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