var gulp = require('gulp'),
    del = require('del'),
    jest = require('gulp-jest'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    watchify = require('watchify'),
    browserify = require('browserify'),
    reactify = require('reactify');

require('harmonize')();

gulp.task('scss', function () {
    gulp.src('./css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('jest', function() {
    return gulp.src('js/*/__tests__').pipe(jest({
        rootDir: './js',
        scriptPreprocessor: "../node_modules/babel-jest",
        unmockedModulePathPatterns: [
            "node_modules/react"
        ]
    }));
});

gulp.task('watch', function() {
    gulp.watch('css/*', ['scss']);
    gulp.watch('js/index.hbs', ['handlebars']);
});

gulp.task('clean', function() {
    del('dist/', { force: true });
});

var bundler = watchify(browserify('./js/app.js', watchify.args));
// add any other browserify options or transforms here
bundler.transform(reactify); 
gulp.task('browserify', bundle); // so you can run `gulp js` to build the file
bundler.on('update', bundle); // on any dep update, runs the bundler
bundler.on('log', gutil.log); // output build logs to terminal

function bundle() {
    return bundler.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you dont want sourcemaps
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./dist'));
}

gulp.task('default', ['build', 'browserify', 'watch']);
gulp.task('build', ['clean', 'scss']);
gulp.task('test', ['jest']);
