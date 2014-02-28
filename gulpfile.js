var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function(){
  gulp.src('scss/app.scss')
  .pipe(sass({
    includePaths: ['bower_components/foundation/scss'],
    errLogToConsole: true
  }))
  .pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function(){
  browserSync.init(['css/*.css', 'js/*.js'], {
    server: {
      baseDir: './'
    }
  });
});

gulp.task('default', ['sass', 'browser-sync'], function(){
  gulp.watch('scss/**/*.scss', ['sass']);
});

