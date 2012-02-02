var Schema = require('mongoose').Schema
    , ObjectId = Schema.ObjectId;


/**
 * Schema.
 */

var Role = module.exports = new Schema({
    name         : { type: String, required: true }
  , permissions      : { type: [String]}
  , date_created  : { type: Date, default: Date.now }
  , user_created  : { type: ObjectId }
  , date_updated  : { type: Date }
  , user_updated  : { type: ObjectId } 
})