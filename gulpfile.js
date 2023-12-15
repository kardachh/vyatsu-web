const {src, dest, watch, task, parallel} = require('gulp');
const pug = require('gulp-pug');

task('pug-expert', function () {
    return src('pug-templates/expert/pages/**/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(dest('expert'));
});

task('pug-rcfg43', function () {
    return src('pug-templates/rcfg43/pages/**/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(dest('rcfg43'));
});

task('watch', function() {
    watch('pug-templates/expert/**/*.pug', parallel('pug-expert'));
    watch('pug-templates/rcfg43/**/*.pug', parallel('pug-rcfg43'));
});

task('default', parallel('watch'))
