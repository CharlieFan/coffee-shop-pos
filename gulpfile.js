/* eslint-disable */
/**
 * Svg sprite tool:
 */

var gulp = require('gulp');
var svgSymbols = require('gulp-svg-symbols');

gulp.task('svg', function() {
    return gulp.src('./src/assets/svgs/*.svg')
        .pipe(svgSymbols({
            fontSize: 16,
            svgAttrs: {
                class: 'svg-icon'
            },
            templates: ['default-svg']
        }))
        .pipe(gulp.dest('./src/assets'));
});

gulp.task('default', ['svg'])