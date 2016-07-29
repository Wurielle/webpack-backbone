var webpack = require('webpack');
var path = require("path");
// load asynchron
var AsyncModulePlugin = require('async-module-loader/plugin');
// compilation progress bar
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
// extract css, json, ... from app.js
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry:{
        main: './src/js/main.js',
    },
    output: {
        path: path.join(__dirname, "/public/"),
        publicPath: "/public/",
        filename: "/js/app.js",
        chunkFilename: "[name].js",
    },
    module: {
        loaders: [
            /*{ test: /\.css$/, loader: "style!css" },*/
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
            { test: /\.styl$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')},
            /*{ test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'},*/
            { test: /\.html$/, loaders: ['mustache'/*, 'html'*/]},
            { test: /\.json$/, loader: 'json-loader?name=json/[name].[ext]?[hash]' },
            /*{ test: /\.json$/, loader: 'file?name=json/[name].[ext]?[hash]' },*/
            // { test: /\.mp3$/, loader: 'file?name=audio/[name].[ext]' },
            /*{ test: /\.srt$/, loader: 'file?name=subtitles/[name].[ext]' },*/
            // { test: /\.srt$/, loader: 'raw-loader!srt-loader' },
            { test: /\.(jpe?g|png|gif)$/i, loaders: ['file?hash=sha512&digest=hex&name=images/export/[name].[ext]','image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']},
            { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader : 'file-loader?name=fonts/[name].[ext]'}
        ]
    },
    plugins : [
        new ExtractTextPlugin("/css/[name].css"),
    	new ProgressBarPlugin(),
        new webpack.ProvidePlugin({
            $ : "jquery",
            jQuery: 'jquery',
            Backbone : "backbone",
            _ : "underscore",
        }),
        new AsyncModulePlugin(),
    ]
};
