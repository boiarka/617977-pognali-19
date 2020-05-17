"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var concat = require("gulp-concat-css");

var csso = require("gulp-csso");
var rename = require("gulp-rename");

var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");

var clean = require("del");


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
    .pipe(rename("style.min.css"))
    .pipe(concat("node_modules/normalize.css/normalize.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
  // .pipe(imagemin([
  //   imagemin.optipng({
  //     optimizationLevel: 3
  //   }),
  //   imagemin.mozjpeg({
  //     progressive: true
  //   }),
  //   imagemin.svgo()
  // ]))
  // .pipe(gulp.dest("source/img"))
  // .pipe(gulp.src("source/img/**/*.{png,jpg}"))
  // .pipe(webp({
  //   quality: 90
  // }))
  // .pipe(gulp.dest("source/img"))

  // .pipe(gulp.src("source/img/icon-*.svg"))
  // .pipe(svgstore({
  //   inlineSvg: true
  // }))
  // .pipe(rename("sprite.svg"))
  // .pipe(gulp.dest("build/img"));
});


gulp.task("clean", function () {
  return clean("build");
});

gulp.task("copy", function () {
  return gulp.src([
      "source/*.html",
      "source/css/style.min.css",
      "source/js/**",
      "source/fonts/**",
      "source/img/**"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.scss", gulp.series("css"));
  gulp.watch("source/*.html").on("change", server.reload);
});


gulp.task("build", gulp.series("clean", "copy", "css", "images"));
gulp.task("start", gulp.series("build", "server"));
