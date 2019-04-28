const Koa = require('koa', '2.7.0');

const app = new Koa();

app.use(async ctx =>{
    ctx.body = 'Hello World';
});

app.listen(3000);