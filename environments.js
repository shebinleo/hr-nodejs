/**
 * Exports
 */

module.exports = function(app){
 
  var port = process.env.PORT || 4000;
 
  app.configure('development', function (){
    this
      .set('version','0.1.1')
      .set('host', 'localhost')
      .set('port', port)
      .set('env','development')
      //.use(express.errorHandler({ dumpExceptions: true, showStack: true }))
  }); 
  
  app.configure('production', function (){
    this
      .set('version','0.1.1')
      .set('host', 'hrsite.com')
      .set('port', port)
      .set('env','production')
      //.use(express.errorHandler())
  });
  
}