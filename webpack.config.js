/**
 * 作者：Administrator
 * 创建时间：2016-09-11 21:57
 * 类描述：
 * 修改人：
 * 修改时间：
 */
var webpack = require('webpack');
var path = require('path');
var pkg = require('./package');

var entry = {
    index:'./index.js',
    //vendor:['jquery']
};

var devServer = {
    historyApiFallback:true,
    hot:true,
    inline:true,
    process:true,
    color:true,
    port:3000,
    host:'127.0.0.1',
    contentBase:'./'
};

var alias = {

};

var output = {
    filename:'bundle.js'
};

var loaders = [
];

var plugins = [
   /* new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery:'jquery',
        "window.jQuery":'jquery'
    }),*/
    //new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
];

module.exports = {
    entry:entry,
    devtool:'source-map',
    devServer:devServer,
    resolve: {
        root:[process.cwd()],
        extensions: ['', '.js', '.jsx', '.json', '.css', '.less'],
        alias:alias
    },
    output:output,
    module:{
        loaders:loaders
    },
    plugins:plugins
};
