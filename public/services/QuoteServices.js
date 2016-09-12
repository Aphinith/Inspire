angular.module('QuoteServices',[])

.factory('RQFactory', function($http) {

  var getInspireQuotes = function() {
    return $http({
      method: 'GET',
      url: '/inspire',
    }).then(function(res) {
      return res;
    });

  };

  var getWisdomQuotes = function() {
    var test = 'success';
    console.log('inside getWisdomQuotes factory', test);
    return test;
  };

  var getLaughterQuotes = function() {

  };


  return {
    getInspireQuotes: getInspireQuotes,
    getWisdomQuotes: getWisdomQuotes,
    getLaughterQuotes: getLaughterQuotes
  }

});