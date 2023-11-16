const {src, dest, watch, task, parallel} = require('gulp');
const pug = require('gulp-pug');

task('pug-expert', function () {
    return src('pug-templates/expert/pages/**/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(dest('expert'));
});

task('watch', function () {
    return watch('pug-templates/**/*.pug', parallel('pug-expert'))
});

task('default', parallel('watch'))