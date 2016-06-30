'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import gutil from 'gulp-util';
import ngHtml2Js from 'gulp-ng-html2js';

function handleError(error) {
  gutil.log(gutil.colors.magenta(error.message));
  if (error.stack) { gutil.log(gutil.colors.cyan(error.stack)); }
  process.exit(1);
}

gulp.task('babel', function() {
  gulp.src(['./src/authComponent/*'])
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('./dist/authComponent'))
    .on('error', handleError)
  return gulp.src(['./src/auth/*.js'])
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('./dist/auth'))
    .on('error', handleError);
});

gulp.task('htmlify', function() {
  return gulp.src("./src/auth/views/*.html")
    .pipe(ngHtml2Js({
      moduleName: "authApp",
      prefix: "authApp/auth/views/"
    }))
    .pipe(gulp.dest("./dist/auth/views"))
    .on('error', handleError);
});

gulp.task('dist', ['babel', 'htmlify']);