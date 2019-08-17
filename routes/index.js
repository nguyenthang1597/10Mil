const createError = require('http-errors');


const testRoute = require('./testRoute');

module.exports = (app) => {
  app.use(testRoute);


  app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    const error = req.app.get('env') === 'development' ? err : {};
    res.status(error.status || 500);
    res.json(error)
  });
};
