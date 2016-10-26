var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var dist = path.join(__dirname, 'dist');

fs.createReadStream(path.join('src', 'index.html'))
    .pipe(fs.createWriteStream(path.join(dist, 'index.html')));

fs.createReadStream(path.join('src', 'robots.txt'))
    .pipe(fs.createWriteStream(path.join(dist, 'robots.txt')));

module.exports = {
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
            }
        ]
    }
};
