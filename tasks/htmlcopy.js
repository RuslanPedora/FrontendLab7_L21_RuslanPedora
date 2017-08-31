const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractHtml = new ExtractTextPlugin({ filename: 'index.html' });
//--------------------------------------------------------------------------------
module.exports = {
    entry: './src/index.html',
    output: {
        path: '',
        filename: 'index.html'
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: extractHtml.extract({
                    use: [{
                        loader: 'html-loader'
                    }]
            })
        }]
    },
    plugins: [ 
        extractHtml,
        new CleanWebpackPlugin(['build'])     
    ]
}
//--------------------------------------------------------------------------------