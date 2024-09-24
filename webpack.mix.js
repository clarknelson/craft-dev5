const mix = require('laravel-mix');

mix.js('app/scripts/main.js', 'dist/scripts')
    .sass('app/styles/critical.scss', 'dist/styles')
    .sass('app/styles/main.scss', 'dist/styles')
    .setPublicPath('web')
    .version(); // Enable cache busting