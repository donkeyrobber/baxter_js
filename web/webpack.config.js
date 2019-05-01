const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');

const clientBaseDir = path.join(__dirname, 'client');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    output: {
       filename: isDevelopment ? '[name].js' : '[name].[hash].js',
       path:  path.resolve(__dirname, 'dist'),
       publicPath: '/'
    },
    entry: {'main': [path.join(clientBaseDir, 'src', 'index.js')]},
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader'
            },
            {
                test:/\.html?$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(clientBaseDir, 'src', 'index.html'),
            filename: './index.html'
        }),
    ],
    devServer: {
        host: '0.0.0.0',
        port: '3001'
    }
};