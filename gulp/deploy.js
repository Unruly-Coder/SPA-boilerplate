'use strict';

var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

// gh-pages.
gulp.task('deploy', function() {
  gulp.src(global.paths.dist + '/**/*')
    .pipe(ghPages());
});
