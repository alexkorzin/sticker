var gulp   = require('gulp');
var server = require('browser-sync').create();
var util   = require('gulp-util');
var config = require('../config');

// in CL 'gulp server --open' to open current project in browser
// in CL 'gulp server --tunnel siteName' to make project available over http://siteName.localtunnel.me

gulp.task('server', function() {
    server.init({
        server: {
            baseDir: config.dest.root,
        },
        files: [config.dest.html, config.dest.css],
        port: 3000,
        open: false
    });
});

module.exports = server;
