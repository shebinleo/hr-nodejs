/**
 * Load controllers
 */

//Need write a method to automatically load all controllers here
var staticpage = require('./controllers/staticpage_controller')
	, user = require('./controllers/user_controller');


/**
 * Exports
 */

module.exports = function(app){

  //  Load database and pass it down to the controllers
  var db = app.set('db');

  //  Load Root
  app.get('/', function (req, res, next){
	res.render('index', {
    	title: 'Home'
  	}) 
  }); // *Root


  //  Load Module Controller + Routes
  // app.get('/url', function (req, res, next){ controller.method(req, res, db, next) });

  // Static pages
  app.get('/aboutus', function (req, res, next){ staticpage.aboutus(req, res, next) });
  app.get('/contactus', function (req, res, next){ staticpage.contactus(req, res, next) });
  app.get('/services', function (req, res, next){ staticpage.services(req, res, next) });

  
  // Static pages
  app.get('/user/registration', function (req, res, next){ user.registration(req, res, db, next) });
  app.post('/user/registration', function (req, res, next){ user.create(req, res, db, next); });


}