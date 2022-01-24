const path=require('path');
const Htmlwebpackplugin=require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports={
    entry:{
        main:'./src/index.js'
    },
    plugins:[
        new Htmlwebpackplugin({
        template:'src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    optimization:{
        splitChunks:{
            chunks:'all', //共用类库时自动代码分割出来
            minSize:0,
            maxSize:50000,//5kb,loadsh 1mb =>会进行二次拆分，maxSize配置得较少
            minChunks:2,//引入至少2次才会进行代码分割
            maxAsyncRequests:5,//打开网页时只能加载5个请求，超出5个不会加载了
            maxInitialRequests:3,//入口文件引入其他库，最多3个
            automaticNameDelimiter:'~',//文件生成连接符
            cacheGroups:{
                vendors:false,//异步代码分割时命名前不会带vendors
                default:{
                    priority: -20,//优先级等级
                    reuseExistingChunk:true,//打包a,b a引入b，打包时再用到b，那么只会复用不会再次打包b到common.js里了
                    filename:'common.js'
                }
            }
        }
    },
    output: {
        filename:'[name].js',
        path:path.resolve(__dirname,'../dist')//build上一层目录的位置
    },
    module:{
        rules:[{
            test:/\.js$/,
            exclude:/node_modules/,
            loader:'babel-loader'
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
        },{
            test:/\.(eot|ttf|svg)$/,
            use:{
                loader:'file-loader'
            }
        }]
    }
}