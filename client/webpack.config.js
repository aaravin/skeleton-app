var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var dist = path.join(__dirname, 'dist');

module.exports = {
    devtool: 'eval',
    entry: './src/js/index.js',
    output: {path: dist, filename: 'bundle.js'},
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            },
            { 
                test: /\.(ico|html|txt)$/,
                loader: "file?name=[path][name].[ext]"
            }
        ]
    }
};
