const koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new koa();

const router = new Router();
const api = require('./api');

router.use('/api', api.routes());
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());
app.listen(4000, () => {
  console.log('listening on port 4000');
  console.log('http://localhost:4000');
});
