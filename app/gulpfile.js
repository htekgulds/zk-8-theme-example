var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    port = process.env.port || 3031;

gulp.task('browserify', function () {
    gulp.src('./src/main/webapp/js/components/main.js')
        .pipe(browserify({
            transform: 'reactify'
        }))
        .pipe(gulp.dest('./src/main/webapp/js/build.js'));
});

gulp.task('open', function () {
    var options = {
        url: 'http://localhost:' + port
    };
    gulp.src('./src/main/webapp/index.zul')
        .pipe(open('', options));
});

gulp.task('connect', function () {
    connect.server({
        root: 'src/main/webapp',
        port: port,
        livereload: true
    });
});

gulp.task('js', function () {
    gulp.src('./src/main/webapp/dist/**/*.js')
        .pipe(connect.reload());
});

gulp.task('zul', function () {
    gulp.src('./src/main/webapp/*.zul')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('src/main/webapp/dist/js/**/*js', ['js']);
    gulp.watch('src/main/webapp/index.zul', ['zul']);
    gulp.watch('src/main/webapp/js/**/*.js', ['browserify']);
});

gulp.task('default', ['browserify']);

gulp.task('serve', ['browserify', 'connect', 'open', 'watch']);



