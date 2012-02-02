
var Schema = require('mongoose').Schema
    , ObjectId = Schema.ObjectId;


/**
 * Schema.
 */

var User = module.exports = new Schema({
    email         : { type: String, required: true }
  , password      : { type: String, required: true }
  , last_access  : { type: Date }
  , last_login  : { type: Date }	
  , is_active     : { type: Boolean, default:true }
  , status      : { type: String }
  , date_created  : { type: Date, default: Date.now }
  , user_created  : { type: ObjectId }
  , date_updated  : { type: Date }
  , user_updated  : { type: ObjectId }
})