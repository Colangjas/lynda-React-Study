var path = require('path'); 
var webpack = require('webpack');

module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path:  __dirname + "/public/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.json$/,
                type: 'javascript/auto',
                use: "json-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
            }
        ]
    }
}