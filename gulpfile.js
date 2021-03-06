var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function(){
  gulp.src('scss/app.scss')
  .pipe(sass({
    loadPath: ['bower_components/foundation/scss'],
  }))
  .on('error', function(){})
  .pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function(){
  browserSync.init(['css/*.css', 'js/*.js'], {
    host: 'localhost',
    server: {
      baseDir: './'
    }
  });
});

gulp.task('default', ['sass', 'browser-sync'], function(){
  gulp.watch('scss/**/*.scss', ['sass']);
});

