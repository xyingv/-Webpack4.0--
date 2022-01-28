const path=require('path');
const Htmlwebpackplugin=require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack=require('webpack');

module.exports={
    entry:{
        main:'./src/index.js'
    },
    plugins:[
        new Htmlwebpackplugin({
        template:'src/index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $:'jquery',//当使用$时会自动引入jquery
            _join:['lodash','join']
        })
    ],
    optimization:{
        runtimeChunk:{
            name:'runtime'
        },
        usedExports:true, //哪些模块被使用了再打包
        splitChunks:{
            chunks:'all', //共用类库时自动代码分割出来,默认async
        }
    },
    performance:false,//不让提示性能问题
    output: {
        
        path:path.resolve(__dirname,'../dist')//build上一层目录的位置
    },
    module:{
        rules:[{
            test:/\.js$/,
            exclude:/node_modules/,
            use:[{
                loader:'babel-loader'
            },{
                loader:'imports-loader?this=>window'
            }]
        },{
            test:/\.(gif|png|jpg)$/,
            use:{
                loader:'url-loader',
                options:{
                    name:'[name]_[hash].[ext]',
                    outputPath:'image/',
                    limit:204800
                }
            }
        },{
            test:/\.(eot|ttf|svg)$/,
            use:{
                loader:'file-loader'
            }
        }]
    }
}