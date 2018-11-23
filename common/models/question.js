'use strict';

module.exports = function(Question) {

    Question.vote = function(cb) {
          var currentDate = new Date();
          var currentHour = currentDate.getHours();
          var OPEN_HOUR = 6;
          var CLOSE_HOUR = 20;
          console.log('Current hour is %d', currentHour);
          var response;
          if (currentHour >= OPEN_HOUR && currentHour < CLOSE_HOUR) {
            response = 'We are open for business.';
          } else {
            response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
          }
          cb(null, response);
        };
        Question.remoteMethod(
          'vote', {
            http: {
              path: '/status',
              verb: 'post'
            },
            returns: {
              arg: 'status',
              type: 'string'
            }
          }
        );
};
