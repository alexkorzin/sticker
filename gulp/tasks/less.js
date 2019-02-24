var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var config = require('../config');
var csso = require('postcss-csso');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


var processors = [
    autoprefixer({
        browsers: ['last 4 versions'],
        cascade: false
    }),
    require('lost'),
    mqpacker({
        sort: sortMediaQueries
    }),
    csso
];

gulp.task('less', function () {
    return gulp
        .src(config.src.less + '/app.less')
        .pipe(sourcemaps.init())
        .pipe(less({
            outputStyle: config.production ? 'compact' : 'expanded', // nested, expanded, compact, compressed
            precision: 5
        }))
        .on('error', config.errorHandler)
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.dest.css));
});

gulp.task('less:watch', function () {
    gulp.watch(config.src.less + '/**/*.*', gulp.series('less'));
});

function isMax(mq) {
    return /max-width/.test(mq);
}

function isMin(mq) {
    return /min-width/.test(mq);
}

function sortMediaQueries(a, b) {
    A = a.replace(/\D/g, '');
    B = b.replace(/\D/g, '');

    if (isMax(a) && isMax(b)) {
        return B - A;
    } else if (isMin(a) && isMin(b)) {
        return A - B;
    } else if (isMax(a) && isMin(b)) {
        return 1;
    } else if (isMin(a) && isMax(b)) {
        return -1;
    }

    return 1;
}
