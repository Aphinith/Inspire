angular.module('inspire', [])
.controller('generateQuotesCtrl', function($scope, $http) {
  $scope.quote = "";

  //function for inspirational quotes
  $scope.inspire = function() {
    $scope.quote = "Here is an inspirational quote";
    $http({
      method: 'GET',
      url: 'http://quotes.rest/quote.json?category=inspire'
    }).then(function successCallback(response) {
      console.log('success');
    },
    function errorCallback(response) {
      console.log('error');
    });
  };


  //function for wisdom quotes
  $scope.wise = function() {
    $scope.quote = "Here is a word to the wise";
  };


  //function for hilarious quotes
  $scope.laugh = function() {
    $scope.quote = "Laughter is the cure all for all ailments";
  };



})