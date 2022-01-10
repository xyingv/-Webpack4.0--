const path=require('path');
module.exports={
    mode:'production',
    entry:{
        main:'./src/index.js'
    },
    output: {
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[{
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
            use:['style-loader','css-loader','sass-loader','postcss-loader']
        }]
    }
}