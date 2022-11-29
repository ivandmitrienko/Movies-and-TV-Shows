import historyApiFallback from "connect-history-api-fallback";

export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}`,
            middleware: [ historyApiFallback() ]
        },
        notify: false,
        port: 3000,
    });
}