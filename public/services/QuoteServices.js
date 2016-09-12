angular.module('QuoteServices',[])

.factory('RQFactory', function($http) {

  var getInspireQuotes = function() {
    console.log('got inside inspire quotes factory');
    var results;
    return $http({
      method: 'GET',
      url: '/inspire',
    }).then(function(res) {
      results = res;
      return results
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