'use strict';

// routes-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const routes = new mongooseClient.Schema({
    destination: { type: mongooseClient.Schema.Types.Mixed, required: true },
    title: { type:String, required: true },
    desctiption: { type:String },

    drivedPerson:[{
      name: { type:String },
      origin: { type:mongooseClient.Schema.Types.Mixed }
    }],

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('routes', routes);
};
