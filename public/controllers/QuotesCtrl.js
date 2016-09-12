angular.module('QuotesCtrl',['ngStorage'])

.controller('generateQuotesCtrl', function($scope, $http, $localStorage, RQFactory) {
  $scope.quote;
  $scope.author;
  $scope.favorites;

  //****************************************************************************************
  //function for inspiratioal quotes
  $scope.inspire = function() {
    RQFactory.getInspireQuotes()
    .then(function(response) {
      var quote = response.data.contents.quote;
      var author = response.data.contents.author;
      $scope.quote = quote;
      $scope.author = author;
    })
  }

  //****************************************************************************************
  //function for wisdom quotes
  $scope.wise = function() {
    RQFactory.getWisdomQuotes()
    .then(function(response) {
      var quote = response.data.contents.quote;
      var author = response.data.contents.author;
      $scope.quote = quote;
      $scope.author = author;
    })
  }

  //****************************************************************************************
  //function for hilarious quotes
  $scope.laugh = function() {
    console.log('laugh controller called');
    RQFactory.getLaughterQuotes()
    .then(function(response) {
      var quote = response.data.contents.quote;
      var author = response.data.contents.author;
      $scope.quote = quote;
      $scope.author = author;
    })
  }

//**************************************************************************************
//setup ngStorage to save favorite quotes
$scope.storage = $localStorage.$default({});
//***************************************************************************************

  $scope.add = function() {
    if ($scope.quote === undefined) {
      alert('Nothing to add.');
    } else {
      alert('Quote added to your favorites!')
      $scope.storage[$scope.quote] = $scope.author;
    }
  };

  $scope.show = function() {
    $scope.favorites = $scope.storage;
  };

  $scope.delete = function() {
    $localStorage.$reset();
  }
})