
let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync');
let uglify = require('gulp-uglify');
let concat = require('gulp-concat');
let rename = require('gulp-rename');
let del = require('del');
let autoprefixer = require('gulp-autoprefixer');

gulp.task('scss', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({ 
      overrideBrowserslist: ["last 8 versions"] 
    }))
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('css', function(){
  return gulp.src([
  'node_modules/reset.css/reset.css',
  'node_modules/slick-carousel/slick/slick.css'
  // 'node_modules/magnific-popup/dist/magnific-popup.css'
  ])
  .pipe(concat('_libs.scss'))
  .pipe(gulp.dest('app/scss'))
  .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function(){
  return gulp.src('app/*.html')
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('script', function(){
  return gulp.src('app/js/*.js')
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function(){
  return gulp.src([
    'node_modules/slick-carousel/slick/slick.js'
    // 'node_modules/magnific-popup/dist/jquery.magnific-popup.js'
  ])
  .pipe(concat('libs.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('clean', async function(){
  del.sync('dist');
});

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
        baseDir: "app/"
      }
  });
});

gulp.task('export', function(){
  let buildHTML = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));
  let buildCSS = gulp.src('app/css/*.css')
    .pipe(gulp.dest('dist/css'));
  let buildJS = gulp.src('app/js/*.js')
    .pipe(gulp.dest('dist/js'));
  let buildFONTS = gulp.src('app/fonts/*.*')
    .pipe(gulp.dest('dist/fonts'));
  let buildIMG = gulp.src('app/images/**/*.*')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
  gulp.watch('app/*.html', gulp.parallel('html'));
  gulp.watch('app/js/*.js', gulp.parallel('script'));
});

gulp.task('build', gulp.series('clean', 'export'));

gulp.task('default', gulp.parallel('css', 'scss', 'js', 'browser-sync', 'watch'));