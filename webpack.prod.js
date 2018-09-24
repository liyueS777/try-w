const webpack = require('webpack')
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const common = require('./webpack.common.js');
module.exports = merge(common,{
    // 一般开发环境用inline-source-map;而在生产环境用source-map；
    devtool:"source-map",
    plugins:[
        new UglifyJSPlugin({
            //清楚控制台的e、console
            // uglifyOptions: {
            //     compress: {
            //       warnings: false,
            //       drop_debugger: true,
            //       drop_console: true
            //     }
            // },
            sourceMap: false,//这个是把代码暴露的，又具备调试的功能设置为true的话
            parallel: true
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV":JSON.stringify("prodution")
        })
    ]
})
