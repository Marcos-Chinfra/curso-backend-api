const productsRouter = require('./products');
const usersRouter = require('./users');
const categoriesRouter = require('./categories');

function routerAPI(app){
  app.use('/products', productsRouter);
  app.use('/users', usersRouter);
  app.use('/categories', categoriesRouter);
}

module.exports = routerAPI;
