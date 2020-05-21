  
let gulp = require('gulp'),
    sass = require('gulp-sass'),
    gcmq = require('gulp-group-css-media-queries'),
    webp = require('gulp-webp'),
    imagemin = require('gulp-imagemin'),
    svgcss = require('gulp-svg-css');

let path = {
    build: {
        css: './',
        img: './images',
    },
    src: {
        css: 'src/scss/**/*.scss',
        img: 'src/images/**/*',
    },
    watch: {
        css: 'src/scss/**/*.scss',
        img: 'src/images/**/*',
    }
};


function styles() {
    return gulp.src(path.src.css)
        .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
        .pipe(gcmq())
        .pipe(gulp.dest(path.build.css))
}

function images() {
    return gulp.src(path.src.img)
        .pipe(imagemin({
            quality: 95,
            verbose: true,
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(gulp.src(path.src.img))
        .pipe(webp({
            quality: 90,
        }))
        .pipe(gulp.dest(path.build.img))
}

function svgToCss() {
    return gulp.src('src/svg-in-css/*.svg')
        .pipe(imagemin())
        .pipe(gulp.dest('src/svg-in-css-optimized'))
        .pipe(gulp.src('src/svg-in-css-optimized/*.svg'))
        .pipe(svgcss({
			cssPrefix: 'icon-',
			addSize: true
		}))
        .pipe(gulp.dest('src/svg-in-css-optimized'))
}

function watch() {
    gulp.watch(path.watch.css, styles)
    gulp.watch(path.watch.img, images)
    gulp.watch('src/svg-in-css/*.svg', svgToCss)
}


exports.default = gulp.parallel(styles, images, svgToCss, watch);