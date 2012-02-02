/**
 *  Load dependencies
 */

var express   = require('express')
    , mongoose  = require('mongoose')
    , constants  = require('../constants')
	, MongoStore = require('connect-mongo')
	, expressValidator = require('express-validator');
	

/**
 *  Exports
 */

module.exports = function(app){

  //  Setup DB Connection

  var dblink = process.env.MONGOHQ_URL || constants.DB_URL;

  var db  = mongoose.createConnection(dblink);

  //  Configure expressjs

  app.configure(function (){
    this
      //.use(express.logger('\033[90m:method\033[0m \033[36m:url\033[0m \033[90m:response-time ms\033[0m'))
      .use(express.cookieParser())
      .use(express.session({ 
			secret: constants.COOKIE_SECRET
			,cookie: { _expires: new Date(Date.now() + 3600000) } //1 Hour //need to confirm
			,store: new MongoStore({
				db: constants.DB_NAME
			}) 
		})) //Stores session in the database
	  .use(express.bodyParser())
	  .use(expressValidator)
      .use(express.methodOverride())
	  .use(express.csrf()) //Cross-site request forgery protection
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
   

  // adding constants to the dynamic helper
  app.dynamicHelpers({
    constants: function(){
	  return constants;
	}
	,token: function(req, res) { 
      return req.session._csrf;
	}
	,messages: require('../lib/bootstrap-messages')
	,
  });
  
  return app;
}