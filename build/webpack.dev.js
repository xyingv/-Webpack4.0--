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
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:['style-loader',
                {
                    loader: 'css-loader',
                    options:{
                        importLoaders: 2,
                        modules:true
                    }
                }
                ,'sass-loader','postcss-loader']
            },{
                test:/\.css$/,
                use:['style-loader','css-loader','postcss-loader']
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ],
    output:{
        filename:'[name].js',
        chunkFilename:'[name].chunk.js',
    }
}

module.exports=merge.merge(commonConfig,devConfig)