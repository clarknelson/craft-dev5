const mix = require('laravel-mix');

mix.setPublicPath('web');

mix.js('app/scripts/main.js', 'dist/scripts');

mix.sass('app/styles/critical.scss', 'dist/styles')
    .options({
        postCss: [
            require('tailwindcss'),  // Run Tailwind CSS as a PostCSS plugin
            require('autoprefixer'),  // Optionally include autoprefixer
        ],
    });

mix.sass('app/styles/main.scss', 'dist/styles')
    .options({
        postCss: [
            require('tailwindcss'),  // Run Tailwind CSS as a PostCSS plugin
            require('autoprefixer'),  // Optionally include autoprefixer
        ],
    });

if (mix.inProduction()) {
    mix.version();
} else {
    mix.sourceMaps();
}