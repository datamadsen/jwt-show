/**
 * Require Browsersync
 */
var browserSync = require('browser-sync').create();
var historyApiFallback = require('connect-history-api-fallback')

/**
 * Run Browsersync with server config
 */
browserSync.init({
    server: "./dist",
    files: [".dist"],
    middleware: [require("connect-logger")(), historyApiFallback()]
});
