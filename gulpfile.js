var gulp = require("gulp"),
    babel = require("gulp-babel"),
    concat = require("gulp-concat"),
    sourcemaps = require("gulp-sourcemaps"),
    minifycss = require("gulp-minify-css"),
    sass = require("gulp-sass")
    connect = require("gulp-connect");

var paths = {
  js: ["src/**/*.js"],
  sass: ["sass/**/*.scss"],
  html: ["*.html"]
};

gulp.task("connect", function () {
  connect.server({
    livereload: true
  });
});

gulp.task("babel", function () {
  gulp.src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(concat("app.js"))
    .pipe(babel({ modules: "common" }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist"));
});

gulp.task("sass", function () {
  gulp.src(paths.sass)
    .pipe(sourcemaps.init())
    .pipe(concat("app.css"))
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist"));
});

gulp.task("reload", function () {
  gulp.src(paths.js.concat(paths.sass).concat(paths.html))
    .pipe(connect.reload());
})

gulp.task("watch", function () {
  gulp.watch(paths.js, ["babel"]);
  gulp.watch(paths.sass, ["sass"]);
  gulp.watch(paths.js.concat(paths.sass).concat(paths.html), ["reload"]);
});

gulp.task("default", ["babel", "sass", "connect", "watch"]);
