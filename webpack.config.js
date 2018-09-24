const webpack = require('webpack');

const path = require('path');
//构建的插件，生成html
const HtmlWebpackPlugin = require('html-webpack-plugin');
//在打包前先清掉指定区域的文件
const CleanWebpaclPlugin = require('clean-webpack-plugin');
// ManifestPlugin 对编译打包后的文件以json格式呈现追踪
const ManifestPlugin = require('webpack-manifest-plugin');


module.exports = {
    entry:{
        index:'./src/js/index.js',
        // print:'./src/js/print.js',
        // another:"./src/js/another-module.js"
    },
    // devtool:'inline-source-map',
    // 这里是在IP：port 下建立服务，讲dist目录下文件作为可访问文件
    // devServer:{
    //     contentBase:"./dist",
    //     hot:true
    // },
    plugins:[
        new HtmlWebpackPlugin({
            title:'这里是生成的title',
            hash:true,//路径后面带哈希
        }),
        // ../为清除指定区域的文件路径
        new CleanWebpaclPlugin(['./dist']),
        new ManifestPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // 使用 ProviderPlugin是为了创造一个shimming全局变量的
        new webpack.ProvidePlugin({
            //这个是获取这个插件lodash的所有方法到全局
            _:"lodash",
            // 还有种是获取某个插件的某个api到全局
            // 遵循： [module.child,...children],这样可以很好的配合将库里面有些其他的没用到的去除
            join:['lodash','join']
        })
        // webpack 4 更新后没有 webpack.optimize.CommonsChunkPlugin
        // 而是为 ；不过这个要和plugins 同级别的
        // optimization:{splitChunks:{
        //     name:"common"
        // }}
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:"common"//指定 公共的bundle 的名称
        // })
        
    ],
    // optimization:{
    //     splitChunks:{
    //         cacheGroups:{
    //             commons:{
    //                 name:"common",
    //                 chunks:"initial",
    //                 minChunks:2
    //             }
    //         }
    //     }
    // },
    output:{
        // 加hash 是为了防止缓存
        filename:'[name].[hash].bundle.js',
        path:path.resolve(__dirname,'./dist'),
        chunkFilename:'[name].[hash].bundle.js'
    },
    mode:"production",
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    }
}