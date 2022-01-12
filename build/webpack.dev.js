const webpack=require('webpack');
const merge=require('webpack-merge');
const commonConfig=require('./webpack.common.js')

const devConfig={
    mode:'development',
    devtool:'eval-cheap-module-source-map',
    devServer:{
        static:false,
        open:true,
        hot: true,//开启hout module replacement功能
        port:'8080' //本地打开的端口
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ],
    optimization:{
        usedExports:true //哪些模块被使用了再打包
    }
}

module.exports=merge.merge(commonConfig,devConfig)