/**
 * Index Home page
 *
 * @param {Request Object} req
 * @param {Response Object} res
 * @param {Databaes Object} db
 * @param {Callback} next
 *
 * @api public
 * @url /
 * @url /home
 */

exports.index = function(req, res, db, next){
  res.render('index', {
    title: 'Home'
  });
}

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

exports.aboutus = function(req, res, db, next){
  res.render('aboutus', {
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

exports.contactus = function(req, res, db, next){
  res.render('contactus', {
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

exports.services = function(req, res, db, next){
  res.render('services', {
    title: 'Services'
  });
}