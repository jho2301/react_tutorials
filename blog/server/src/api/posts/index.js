const Router = require('koa-router');
const posts = new Router();
const controller = require('./posts.ctrl');

posts.get('/', controller.list);
posts.post('/', controller.write);
posts.get('/:id', controller.read);
posts.delete('/:id', controller.remove);
posts.put('/:id', controller.replace);
posts.patch('/:id', controller.update);

module.exports = posts;
