const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin({ filename: 'styles.css' });
const StyleLintPlugin = require('stylelint-webpack-plugin');
//--------------------------------------------------------------------------------
module.exports = {
    entry: [ 
        './src/scss/main.scss', 
        './src/scss/variables.scss' 
    ],
    output: {
        path: '',
        filename: 'styles.css'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractCSS.extract({
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
            })
        }]
    },
    plugins: [
        extractCSS, 
        new StyleLintPlugin({ context: './src/scss/' })
    ]
}
//--------------------------------------------------------------------------------