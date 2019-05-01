const webpack = require('webpack');
const koaWebpack = require('koa-webpack');

const webpackConfig = require('../../webpack.config');

module.exports = () => {
    const host = process.env.HRM_HOST || 'localhost';

    return koaWebpack({
        compiler: webpack(webpackConfig),
        config: {
            publicPath: '/'
        }
    });
};