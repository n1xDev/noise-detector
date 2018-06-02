
var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    ext = require('./gulp_module/ext-plugins.js'),
    config = require('./config'),
    merge = require('merge2'),
    edison = require('./gulp_module/edison.js'),
    runSequence = require('run-sequence'),
    exec = require('child_process').exec,
    gutil = require('gulp-util'),
    path = require('path');


gulp.task('res-pack', plugins.shell.task('npm install', {
    interactive: true
}));

gulp.task('edison-deploy', edison.deployToDevice(gulp, plugins, config));
gulp.task('edison-kill', edison.killProcesses(gulp, ext, config));
gulp.task('edison-restore', edison.restorePackages(gulp, ext, config));
gulp.task('edison-restart', edison.setStartup(gulp, ext, config));
gulp.task('edison-connect', edison.connect(gulp, ext, config));

gulp.task('edison-build', function (callback) {
    runSequence(
        'edison-deploy',
        'edison-kill',
        'edison-restore',
        'edison-connect',
        callback);
});

gulp.task('default', ['edison-deploy', 'edison-kill', 'edison-restore', 'edison-connect']);