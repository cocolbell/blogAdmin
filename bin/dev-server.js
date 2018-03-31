const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.config');
const webpack = require('webpack');
const path = require('path');
const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
    contentBase: path.resolve(__dirname, '../dist'), 
    historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    port: 9090,
    publicPath: "/",
    noInfo: true,
    overlay: true,
    proxy: {
        '/api': {
            target: 'http://localhost:7000',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/api'
            }
        }
    }
});
server.listen(9090, 'localhost', function (err) {
    if (err) throw err
    console.log("Project is running at http://localhost:9090/")
})