const path = require('path');

module.exports = {
    mode: 'production',
    output: {
       filename: '[name].js',
       path:  path.resolve(__dirname, 'dist')
    },
    entry: path.resolve(__dirname, 'src') + '/index.js',
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader'
            }
        ]
    }
};