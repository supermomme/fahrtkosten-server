'use strict';

const users = require('./users/users.service.js');

const routes = require('./routes/routes.service.js');

module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(routes);
};
