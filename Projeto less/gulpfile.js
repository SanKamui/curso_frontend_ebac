const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('styles', () => {
    return gulp.src('less/main.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', () => {
    gulp.watch('less/**/*.less', gulp.series('styles'));
});

gulp.task('default', gulp.series('styles', 'watch'));
