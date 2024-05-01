import gulp from 'gulp';
import browserSync from 'browser-sync';
import sassCompiler from 'sass';
import gulpSass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';
// import {deleteSync} from 'del';;

const sass = gulpSass(sassCompiler);

// function clean() {
//   return deleteSync(['dist/**/*']);
// }

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/style.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('transfer', function() {
    // clean();
    return gulp.src(['src/**/*', '!src/sass/', '!src/sass/**/*', '!src/img/**/*'])
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles'));
    gulp.watch("src/**/*", gulp.parallel('transfer'));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'transfer'));
