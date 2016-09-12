angular.module('QuoteServices',[])

.factory('RQFactory', function($http) {

  // var test = "successful test";
  var search = 'http:///quotes.rest/quote.json?category=';
  var key = '&api_key=cy7IIIwDoKOKCIqNr_jDCQeF';
  var ranNum = Math.floor(Math.random() * 10);

  var getInspireQuotes = function() {
    console.log('got inside inspire quotes factory');
    var options = ['inspire', 'positive', 'confidence', 'self-improvement', 'happiness', 'attitude', 'motivational', 'inspirational', 'success', 'successful-mind'];
    return $http({
      method: 'GET',
      url: search + options[ranNum] + key,
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