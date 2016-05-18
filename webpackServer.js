const http = require('http');
const express = require('express');
const path = require('path');
const webpack = require('webpack');




const startServer = (callback) => {
    const app = express();
    const webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config');
    const compiler = webpack(webpackConfig);

    app.use(require("webpack-dev-middleware")(compiler, {
        noInfo: false, publicPath: webpackConfig.output.publicPath
    }));

    app.use(require("webpack-hot-middleware")(compiler, {
        log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }));

    
    
    const server = http.createServer(app);
    server.listen(process.env.PORT || 1616, function () {
        console.log("Listening on %j", server.address());
        callback(server);
    });
}

module.exports = startServer;

if (require.main === module) {
    startServer(() => {
        console.log('start')
    });
}