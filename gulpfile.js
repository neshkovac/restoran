const gulp = require('gulp');
const mincssmin = require('gulp-minify-css');
const concat = require('gulp-concat');
const autoprefix = require('gulp-autoprefixer');

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

gulp.task('watch', ['style', 'other'], () => {
   gulp.watch('src/style/**/*.css', ['style']);
   gulp.watch(['src/**/*', '!src/style/**/*.css'], ['other']);
});