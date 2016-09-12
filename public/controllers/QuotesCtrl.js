angular.module('QuotesCtrl',['ngStorage'])

.controller('generateQuotesCtrl', function($scope, $http, $localStorage, RQFactory) {
  $scope.quote;
  $scope.author;
  $scope.favorites = {};
  var search = 'http:///quotes.rest/quote.json?category=';
  var key = '&api_key=cy7IIIwDoKOKCIqNr_jDCQeF';

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


  //function for hilarious quotes
  // $scope.laugh = function() {
  //   // $scope.quote = "Laughter is the cure all for all ailments";
  //   var options = ['laughter', 'hilarious', 'humor', 'tso-funny', 'laugh', 'funny', 'sense-of-humor', 'fun', 'joke', 'geek'];
  //   var ranNum = Math.floor(Math.random() * 10);
  //   $http({
  //     method: 'GET',
  //     url: search + options[ranNum] + key 
  //   }).success(function successCallback(response) {
  //     console.log('success');
  //     var quote = response.contents.quote;
  //     var author = response.contents.author;
  //     $scope.quote = quote;
  //     $scope.author = author;
  //   },
  //   function errorCallback(response) {
  //     console.log('error');
  //   });
  // };

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
      // $scope.storage.data[$scope.quote] = $scope.author;
    }
  };

  $scope.show = function() {
    $scope.data = $scope.storage;
    console.log($scope.data);

  };

  $scope.delete = function() {
    $localStorage.$reset();
  }
})