const gulp = require('gulp');
const mincssmin = require('gulp-minify-css');
const concat = require('gulp-concat');
const autoprefix = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

gulp.task('other', () => {
    gulp.src(['src/**/*.*', '!src/style/*'])
        .pipe(gulp.dest('dist/'));
});

gulp.task('style', () => {
    gulp.src('src/style/**/*.css')
        .pipe(autoprefix([
            "> 1%",
            "IE 10"
        ]))
        .pipe(concat('main.css'))
        .pipe(mincssmin())
        .pipe(gulp.dest('dist/style'))
});

gulp.task('style-watch', ['style'], (done) => {
    browserSync.reload();
    done();
});

gulp.task('watch', ['style', 'other'], () => {
    browserSync.instance = browserSync.init({
        server: "./dist",
        debugInfo: true,
        open: true
    });
    gulp.watch('src/style/**/*.css', ['style-watch']);
    gulp.watch(['src/**/*', '!src/style/**/*.css'], ['other']);
});
