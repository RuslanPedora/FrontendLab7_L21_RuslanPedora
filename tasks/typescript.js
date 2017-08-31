const TSLintPlugin = require('tslint-webpack-plugin');
//--------------------------------------------------------------------------------
module.exports = {
    entry: './src/js/app.ts',
    output: {
        path: '',
        filename: 'app.js'
    },
    module : {
        rules: [ 
            { 
                test: /\.ts$/,
                loader: 'ts-loader' 
            } 
        ]
    },
    plugins: [
        new TSLintPlugin({
            files: ['./src/js/app.ts']
        })        
    ]
}