/* eslint-disable comma-dangle */
'use strict';

module.exports = function(Question) {
// Call remote Method
  Question.voteById = function(id, cb) {
  // code goes here
    Question.findById(id, function(err, instance) {
    // updateAll([where], data, callback)
      var callParams = {votes: instance.votes + 1};
      Question.updateAll({id: instance.id}, callParams, function(err, instance2) {
        var out = Object.assign({}, instance.__data, callParams);
        cb(null, out);
      });
    });
  };

// Create remote Method 
  Question.remoteMethod('voteById', {
    http: {path: '/:id/vote', verb: 'get'},
    accepts: [
      {arg: 'id', type: 'string', http: {source: 'path'},
        required: true, 'description': 'Model id'
      },
    ],
    returns: {root: true, type: 'object'},
    description: 'Increment vote attribute for a model ' +
      'instance and persist it into the data source.',
  });
};
