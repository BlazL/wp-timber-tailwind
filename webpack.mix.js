let mix = require('laravel-mix');

mix.js('assets/src/js/app.js', 'assets/dist/')
.postCss('assets/src/css/app.css', 'assets/dist/', [
    require('tailwindcss'),
])
.browserSync({
    proxy: "junaidqadir.local",
    files: [
        "./assets/dist/*",
        "./assets/src/js/**/*.js",
        "./assets/src/css/**/*.css",
        "./assets/src/img/**/*.+(png|jpg|svg)",
        "./**/*.+(html|php)",
        "./templates/**/*.+(html|twig)"
    ]
});