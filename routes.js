/**
 * Load controllers
 */

//write a method to automatically load all controllers here
var staticpages   = require('./controllers/staticpages_controller');


/**
 * Exports
 */

module.exports = function(app){

  //  Load database and pass it down to the controllers

  var db = app.set('db');

  //  Load Root

  app.get('/', function (req, res, next){ staticpages.index(req, res, db, next) }); // *Root

  //  Load Module Controller + Routes

  app.get('/aboutus', function (req, res, next){ staticpages.aboutus(req, res, db, next) });
  app.get('/contactus', function (req, res, next){ staticpages.contactus(req, res, db, next) });
  app.get('/services', function (req, res, next){ staticpages.services(req, res, db, next) });


}