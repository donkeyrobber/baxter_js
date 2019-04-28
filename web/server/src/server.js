const path = require('path');
const views = require('koa-views');
const routes = require('./routes');
const serve = require('koa-static');
const mount = require('koa-mount');

const viewPath = path.join(__dirname, './../../client/dist');

module.exports = async (app) => {
    app.use(views(viewPath, {
        'default': 'html'
    }));

    app.use(mount('/', serve(viewPath)));

    app.use(routes);


};