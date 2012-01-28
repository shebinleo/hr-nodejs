
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , mongoose = require('mongoose')
  , constants = require('./constants');


var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.session({ secret: 'faFka1@$aGsja' }));
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes
var routes = [
    { path: '/', view: 'index', title: 'Home' }
  , { path: '/aboutus', view: 'aboutus', title: 'About Us' }
  , { path: '/contactus', view: 'contactus', title: 'Contact Us' }
  , { path: '/*', view: '404', title: '404 - Page not found' }
];

routes.forEach(function(route) {
	app.get(route.path, function(req, res){
	  res.render(route.view, {
	    title: route.title
	  });
	});	
});

var port = process.env.PORT || 3000;
app.listen(port);

console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
console.log('\x1b[36mSample Blog\x1b[90m v%s\x1b[0m running as \x1b[1m%s\x1b[0m on http://%s:%d',
  app.set('version'),
  app.set('env'),
  app.set('host'),
  app.address().port
);

