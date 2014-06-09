var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var connect = require('connect');
var http = require('http');

var compileSass = function() {
  gulp.src('scss/app.scss')
  .pipe(plumber())
  .pipe(sass({
    loadPath: ['bower_components/foundation/scss'],
    quiet: true
  }))
  .pipe(plumber.stop())
  .pipe(gulp.dest('css'))
}

gulp.task('livereload', function() {

  // Recompile sass on sass changes.
  gulp.src('scss/**/*.scss')
  .pipe(watch(function(){
    compileSass();
  }));

  // Do livereload on css change.
  gulp.src('css/**/*.css')
  .pipe(watch())
  .pipe(livereload())
  
});

gulp.task('serve', function() {
  var app = connect()
  .use(connect.static(__dirname))

  http.createServer(app).listen(3000)

});

gulp.task('default', ['livereload', 'serve']);

