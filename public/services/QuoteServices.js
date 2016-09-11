angular.module('QuoteServices',[])

.factory('RequestQuotesFactory' function($http) {

  var getInspireQuotes = function() {

  };

  var getWisdomQuotes = function() {

  };

  var getLaughterQuotes = function() {

  }


  return {
    getInspireQuotes: getInspireQuotes,
    getWisdomQuotes: getWisdomQuotes,
    getLaughterQuotes: getLaughterQuotes
  }

});