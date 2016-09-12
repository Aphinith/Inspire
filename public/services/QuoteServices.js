angular.module('QuoteServices',[])

.factory('RQFactory', function($http) {

  var getInspireQuotes = function() {
    // var results;
    return $http({
      method: 'GET',
      url: '/inspire',
    }).then(function(res) {
      // results = res;
      return res;
    });

  };

  var getWisdomQuotes = function() {

  };

  var getLaughterQuotes = function() {

  };


  return {
    getInspireQuotes: getInspireQuotes,
    getWisdomQuotes: getWisdomQuotes,
    getLaughterQuotes: getLaughterQuotes
  }

});