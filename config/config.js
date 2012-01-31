/**
 *  Load dependencies
 */

var express   = require('express')
    , mongoose  = require('mongoose');

/**
 *  Exports
 */

module.exports = function(app){

  //  Setup DB Connection

  var dblink = process.env.MONGOHQ_URL || 'mongodb://127.0.0.1:27017/hr-dev';

  var db  = mongoose.createConnection(dblink);

  //  Configure expressjs

  app.configure(function (){
    this
      .use(express.logger('\033[90m:method\033[0m \033[36m:url\033[0m \033[90m:response-time ms\033[0m'))
      .use(express.cookieParser())
      .use(express.bodyParser())
      .use(express.errorHandler({dumpException: true, showStack: true}))
      .use(express.session({ secret: 'faFka1@$aGsja'}))
      .use(express.methodOverride())
  });

  //  Add template engine

  app.configure(function(){
    this
      .set('views', __dirname + '/../views')
      .set('view engine', 'jade')
      .use(express.static(__dirname + '/../public'))
      //.use(app.router)
  });

  //  Save reference to database connection
  
  app.configure(function () {
    app.set('db', { 
        'main': db
    })
  });
   
  
  return app;
}