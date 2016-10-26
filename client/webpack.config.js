var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var dist = path.join(__dirname, 'dist');

fs.createReadStream(path.join('src', 'static', 'index.html'))
    .pipe(fs.createWriteStream(path.join(dist, 'index.html')));

fs.createReadStream(path.join('src', 'static', 'robots.txt'))
    .pipe(fs.createWriteStream(path.join(dist, 'robots.txt')));

fs.createReadStream(path.join('src', 'static', 'favicon.ico'))
    .pipe(fs.createWriteStream(path.join(dist, 'favicon.ico')));

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
            }
        ]
    }
};
