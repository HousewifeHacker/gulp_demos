var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var karma = require('gulp-karma')

gulp.task('clean', function(cb) {
  del(['build'], cb);
});

gulp.task('minJS', ['clean'], function() {
  // Minify and copy all JavaScript with sourcemaps
  return gulp.src(['src/js/*.js'])
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
});

gulp.task('test', function() {
  // Tests minified javascript with Karma and Qunit
  return gulp.src(['build/js/*.js', 'tests/*.js'])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
});
