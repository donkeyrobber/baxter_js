const Koa = require('koa');
const config = require('./config');
const app = new Koa();
require('./server')(app);

app.listen(config.PORT);