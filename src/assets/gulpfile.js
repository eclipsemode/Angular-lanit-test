var gulp = require("gulp");
var browserSync = require("browser-sync");
// sass
var sass = require("gulp-sass")(require('sass'));
var sourcemaps = require('gulp-sourcemaps');
var groupmq = require('gulp-group-css-media-queries');
var minifyCss = require("gulp-cssnano");

//util
var rename = require("gulp-rename");
var plumber = require("gulp-plumber");
var notify = require("gulp-notify");
var notifier = require('node-notifier');
var onError = function (err) {
    notify.onError({
        title: "Gulp",
        subtitle: "Failure!",
        message: "Error: <%= error.message %>",
        sound: "Beep"
    })(err);

    this.emit("end");
};


// SASS
gulp.task("sass", function () {
    return gulp.src("sass/screen.sass")
        .pipe(plumber({errorHandler: onError}))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("css"))
        .pipe(notify({'title': 'Gulp-message', 'message': 'SASS compiled!', onLast: true}))
});

gulp.task("minify-css", function () {
    return gulp.src("css/screen.css")
        .pipe(plumber({errorHandler: onError}))
        .pipe(groupmq())
        .pipe(minifyCss({discardComments: {removeAll: true}}))
        .pipe(rename("screen.min.css"))
        .pipe(gulp.dest("css"));
});

// Gulp production
gulp.task("default", gulp.parallel("sass"), function () {
    /*watchers*/
    gulp.watch("sass/**", gulp.series("sass"));

    notifier.notify({title: 'Gulp-production', message: 'without bsync+pug'});
});

