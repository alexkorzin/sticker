var gulp = require('gulp');
var config = require('../config');
var browserSync = require('browser-sync')

gulp.task('watch', function (cb) {
    gulp.parallel(
        'copy:watch',
        'webpack:watch',
        'less:watch',
    )(cb)
});
