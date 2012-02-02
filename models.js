/**
 * Load dependencies.
 */

var mongoose = require('mongoose');


/**
 * Exports
 */

module.exports = function(){

  //  Load models here
  
  mongoose.model('User', require('./models/user'));
}