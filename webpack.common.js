const path = require("path")
const CleabWebpackPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry:{
        app:'./src/js/index.js'
    },
    plugins:[
        new CleabWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin({
            title:"Production的标题",
            hash:true
        })
    ],
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
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