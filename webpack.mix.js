const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

mix.js('assets/src/js/app.js', 'assets/dist/')
.sass('assets/src/scss/app.scss', 'assets/dist/')
.options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.config.js') ],
})

.browserSync({
    proxy: "jed-wp.lndo.site",
    files: [
        "./assets/dist/*",
        "./assets/src/js/**/*.js",
        "./assets/src/css/**/*.css",
        "./assets/src/img/**/*.+(png|jpg|svg)",
        "./**/*.+(html|php)",
        "./templates/**/*.+(html|twig)"
    ]
});