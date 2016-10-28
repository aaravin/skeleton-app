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
                test: /\.css$/, 
                loader: 'style-loader!css-loader' 
            },
            { 
                test: /\.(ico|html|txt)$/,
                loader: "file?name=[name].[ext]"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.css'] 
    }
};
