/**
 *  Load dependencies
 */
var code_maintenance   = require('../lib/code_maintenance')	
	, constants  = require('../constants');

/**
 * User registration
 *
 * @param {Request Object} req
 * @param {Response Object} res
 * @param {Databaes Object} db
 * @param {Callback} next
 *
 * @api public
 * @url /user/registration
 */

exports.registration = function(req, res, db, next){
  res.render('user/registration', {
	values: req.body
    ,title: 'Registration'
    ,company_types: code_maintenance.codem_getoptions(constants.CMQ_COMPANY_TYPE)
    ,industries: code_maintenance.codem_getoptions(constants.CMQ_COMPANY_INDUSTRY)
  });
}


/**
 * Create User
 *
 * @param {Request Object} req
 * @param {Response Object} res
 * @param {Databaes Object} db
 * @param {Callback} next
 *
 * @api public
 * @url /user/registration
 */
exports.create = function(req, res, db, next){
	var errors = [];
	req.onValidationError(function(msg) {
	    errors.push(msg);
		req.flash('error', msg);
	    return this;
	});
	
	req.assert('company_name', 'Company Name is required').notEmpty();
	req.assert('business_registration_no', 'Business Registration No. is required').notEmpty();
	req.assert('email', 'Email Address is required').notEmpty();
	req.assert('confirm_email', 'Confirm Email Address is required').notEmpty();
	req.assert('email', 'Email Address is not valid').isEmail();
	req.assert('confirm_email', 'Confirm Email Address is not valid').isEmail();
	
	req.assert('email', 'The emails you entered do not match').equals(req.body.confirm_email);
	
	if (errors.length) {
		this.registration(req, res, db, next); //renders the registration page with errors and values
	} else {
		var User = db.main.model('User');
		var _user = new User(req.param('post'));
		console.dir(_user);
		/*_user.save(function(err){
		    if (err) return next(err)
		    res.redirect('/');
		});*/
    }
}
