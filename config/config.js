/**
 *  Load dependencies
 */

var express   = require('express')
    , mongoose  = require('mongoose')
	, MongoStore = require('connect-mongo');
	
//Database name
var DB_NAME = 'hr-dev';

/**
 *  Exports
 */

module.exports = function(app){

  //  Setup DB Connection

  var dblink = process.env.MONGOHQ_URL || 'mongodb://127.0.0.1:27017/' + DB_NAME;

  var db  = mongoose.createConnection(dblink);

  //  Configure expressjs

  app.configure(function (){
    this
      .use(express.logger('\033[90m:method\033[0m \033[36m:url\033[0m \033[90m:response-time ms\033[0m'))
      .use(express.cookieParser())
      .use(express.bodyParser())
      .use(express.session({ secret: 'faFka1@$aGsja', store: new MongoStore({db: DB_NAME}) }))
      .use(express.methodOverride())
      //.use(app.router)
  });

  //  Add template engine

  app.configure(function(){
    this
      .set('views', __dirname + '/../views')
      .set('view engine', 'jade')
      .use(express.static(__dirname + '/../public'))
  });

  //  Save reference to database connection
  
  app.configure(function () {
    app.set('db', { 
        'main': db
    })
  });
   
  
  return app;
}