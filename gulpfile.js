var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var htmlreplace = require('gulp-html-replace');

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

gulp.task('uglifyJS', ['minJS'], function() {
  // Replace script source with minified
  return gulp.src('src/index.html')
    .pipe(htmlreplace({
        js: 'js/all.min.js'
    }))
    .pipe(gulp.dest('build'));
})