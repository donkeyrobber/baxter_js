const path = require('path');
const views = require('koa-views');
const routes = require('./routes');
const serve = require('koa-static');
const mount = require('koa-mount');
const hmr = require('./hmr');

const config = require('./config');

const viewPath = path.join(__dirname, './../../client/dist');

module.exports = async (app) => {
    app.use(views(viewPath, {
        'default': 'html'
    }));

    if (config.env === 'production') {
        app.use(mount('/', serve(viewPath)));
    } else {
        app.use(await hmr());
    }

    app.use(routes);


};