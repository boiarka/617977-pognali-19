"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var concat = require("gulp-concat");
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var clean = require("del");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");

var server = require("browser-sync").create();

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});


gulp.task("concat-css", function () {
  return gulp.src(["node_modules/normalize.css/normalize.css", "source/css/style.css"])
    .pipe(concat("style.min.css"))
    .pipe(csso())
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});


gulp.task("images", function () {
  return gulp.src("source/img/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.mozjpeg({
        progressive: true
      }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"))
    .pipe(gulp.src("build/img/*.{png,jpg}"))
    .pipe(webp({
      quality: 90
    }))
    .pipe(gulp.dest("build/img"))
});

gulp.task("svg-sprite", function () {
  return gulp.src("source/img/sprite/*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});


gulp.task("clean", function () {
  return clean("build");
});

gulp.task("copy", function () {
  return gulp.src([
      "source/js/**",
      "source/fonts/**"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"));
});


gulp.task("scripts", function () {
  return gulp.src("source/js/*.js")
    .pipe(gulp.dest("build/js"));
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.scss", gulp.series("css", "concat-css", "reload-page"));
  gulp.watch("source/js/*.js", gulp.series("scripts", "reload-page"));
  gulp.watch("source/*.html", gulp.series("html", "reload-page"));
});

gulp.task("reload-page", function (done) {
  server.reload();
  done();
});


gulp.task("build", gulp.series("clean", "css", "concat-css", "svg-sprite", "copy", "html", "images"));
gulp.task("start", gulp.series("build", "server"));
