'use strict';

// Initializes the `routes` service on path `/routes`
const createService = require('feathers-mongoose');
const createModel = require('../../models/routes.model');
const hooks = require('./routes.hooks');
const filters = require('./routes.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'routes',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/routes', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('routes');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
