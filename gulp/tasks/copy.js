var gulp = require('gulp');
var config = require('../config.js');

gulp.task('copy:fonts', function () {
    return gulp
        .src(config.src.fonts + '/*.{ttf,eot,woff,woff2,json}')
        .pipe(gulp.dest(config.dest.fonts));
});

gulp.task('copy:data', function () {
    return gulp
        .src(config.src.data + '/**/*.*')
        .pipe(gulp.dest(config.dest.data));
});

gulp.task('copy:lib', function () {
    return gulp
        .src(config.src.lib + '/**/*.*')
        .pipe(gulp.dest(config.dest.lib));
});

gulp.task('copy:rootfiles', function () {
    return gulp
        .src(config.src.root + '/*.*')
        .pipe(gulp.dest(config.dest.root));
});

gulp.task('copy:pages', function () {
    return gulp
        .src(config.src.root + '/*.html')
        .pipe(gulp.dest(config.dest.root));
});

gulp.task('copy:img', function () {
    return gulp
        .src([
            config.src.img + '/**/*.{jpg,png,jpeg,svg,gif}',
            '!' + config.src.img + '/svgo/**/*.*'
        ])
        .pipe(gulp.dest(config.dest.img));
});

gulp.task('copy', gulp.series(
    'copy:img',
    'copy:rootfiles',
    // 'copy:lib',
    // 'copy:data',
    'copy:fonts'
));

gulp.task('copy:watch', function () {
    gulp.watch([config.src.img + '/*', config.src.fonts + '/*'], gulp.parallel('copy:fonts', 'copy:img'));
    gulp.watch([config.src.root + '/*.html'], gulp.parallel('copy:pages'));
});