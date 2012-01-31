/**
 * Load dependencies.
 */

require('./lib/exceptions');

var express = require('express')
  , mongoose = require('mongoose')
  , constants = require('./constants')
  , models = require('./models')
  , config = require('./config/config')
  , routes = require('./routes')
  , environments = require('./environments')
  , errors = require('./errors');

//  Create Server
var app = express.createServer();

//  Load Mongoose Models
models(app);

//  Load Expressjs config
config(app);

//  Load Environmental Settings
environments(app);

//  Load routes config
routes(app);

//  Load error routes + pages
errors(app);


var port = process.env.PORT || 3000;
app.listen(port);

console.log('\x1b[36mHR site\x1b[90m v%s\x1b[0m running as \x1b[1m%s\x1b[0m on http://%s:%d',
  app.set('version'),
  app.set('env'),
  app.set('host'),
  app.address().port
);

