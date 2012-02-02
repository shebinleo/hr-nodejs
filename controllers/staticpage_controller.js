/**
 * About us page
 *
 * @param {Request Object} req
 * @param {Response Object} res
 * @param {Databaes Object} db
 * @param {Callback} next
 *
 * @api public
 * @url /aboutus
 */

exports.aboutus = function(req, res, next){
  res.render('static/aboutus', {
    title: 'About Us'
  });
}

/**
 * Contact us page
 *
 * @param {Request Object} req
 * @param {Response Object} res
 * @param {Databaes Object} db
 * @param {Callback} next
 *
 * @api public
 * @url /contactus
 */

exports.contactus = function(req, res, next){
  res.render('static/contactus', {
    title: 'Contact Us'
  });
}

/**
 * Services page
 *
 * @param {Request Object} req
 * @param {Response Object} res
 * @param {Databaes Object} db
 * @param {Callback} next
 *
 * @api public
 * @url /services
 */

exports.services = function(req, res, next){
  res.render('static/services', {
    title: 'Services'
  });
}