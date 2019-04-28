const Koa = require('koa');

const app = new Koa();
require('./server')(app);

app.listen(3000);