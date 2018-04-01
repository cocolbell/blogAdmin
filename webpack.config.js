var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './app.js'
    ],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader:  'babel-loader?presets[]=react',
                options: {
                    babelrc: true,
                    plugins: ['react-hot-loader/babel'],
                }
            },{
                test: /\.scss$/, 
                exclude: /node_modules/, 
                loader: "style-loader!css-loader!sass-loader?sourceMap"
            }
        ]
    },
    devtool:'#eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    mode: 'development'
}