/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'pages/homepage',

  },
  'GET /list': 'CommandeController.list',
  'GET /fulllist': 'CommandeController.fulllist',
  'POST /create': 'CommandeController.create',
  'GET /cmd': 'CommandeController.fulllist',  // check restriction into controller only
  'GET /getcmdbynumber': 'CommandeController.getcmdbynumber',  // check restriction into controller only


  //'GET /google': 'http://www.google.com',
  //'/foo': { response: 'notFound' },

  /***************************************************************************
  * Authentification Routes                                               *
  ***************************************************************************/
  //'GET /login': { view: 'login' },
  '/login': 'AuthController.login',
  '/logout': 'AuthController.logout',
  //'GET /register': { view: 'register' }
};
