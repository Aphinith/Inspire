angular.module('inspire', ['ngStorage'])
.controller('generateQuotesCtrl', function($scope, $http, $localStorage) {
  // $http.defaults.headers.common["X-TheySaidSo-Api-Secret"] = 9lfbA8Lt0DgYlKpNgV4hkweF;
  $scope.quote;
  $scope.author;
  $scope.favorites = {};
  var search = 'http://quotes.rest/quote.json?category=';
  var key = '&api_key=cy7IIIwDoKOKCIqNr_jDCQeF';

  //****************************************************************************************
  //function for inspirational quotes
  $scope.inspire = function() {
    // $scope.quote = "Here is an inspirational quote";
    var options = ['inspire', 'positive', 'confidence', 'self-improvement', 'happiness', 'attitude', 'motivational', 'inspirational', 'success', 'successful-mind'];
    var ranNum = Math.floor(Math.random() * 10);
    $http({
      method: 'GET',
      url: search + options[ranNum] + key + '/.index.php'
    }).success(function (response) {
        console.log('success');
        // console.log(response);
        var quote = response.contents.quote;
        var author = response.contents.author;
        $scope.quote = quote;
        $scope.author = author;

      },
      function (response) {
      console.log('error');
    })
  };

  //function for wisdom quotes
  $scope.wise = function() {
    // $scope.quote = "Here is a word to the wise";
    var options = ['wise', 'hope', 'wisdom', 'tso-life', 'doingyourbest', 'conscience', 'philosophy', 'existentialism', 'beauty', 'enlightenment'];
    var ranNum = Math.floor(Math.random() * 10);
    $http({
      method: 'GET',
      url: search + options[ranNum] + key 
    }).success(function successCallback(response) {
      console.log('success');
      var quote = response.contents.quote;
      var author = response.contents.author;
      $scope.quote = quote;
      $scope.author = author;
    },
    function errorCallback(response) {
      console.log('error');
    });
  };

  //function for hilarious quotes
  $scope.laugh = function() {
    // $scope.quote = "Laughter is the cure all for all ailments";
    var options = ['laughter', 'hilarious', 'humor', 'tso-funny', 'laugh', 'funny', 'sense-of-humor', 'fun', 'joke', 'geek'];
    var ranNum = Math.floor(Math.random() * 10);
    $http({
      method: 'GET',
      url: search + options[ranNum] + key 
    }).success(function successCallback(response) {
      console.log('success');
      var quote = response.contents.quote;
      var author = response.contents.author;
      $scope.quote = quote;
      $scope.author = author;
    },
    function errorCallback(response) {
      console.log('error');
    });
  };

//**************************************************************************************

$scope.storage = $localStorage.$default({});
// $scope.storage.messages = {};
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









//below was test to send get requests with ajax/jquery
//*************************************************************************************
// $(document).ready(function(){
//   var getQuoteCategories = {
//     type: 'get',
//     url: 'http://quotes.rest/quote.json?category=inspire&api_key=9lfbA8Lt0DgYlKpNgV4hkweF',
//     // dataType: 'json',
//     success: function(data) {
//         console.log('Pulled from API!!');
//         console.log(data);
//                    },
//            error: function() {
//                         console.log('Something did not happen as intended');
//                         alert('something went wrong!!!')
//                    },
//       //      beforeSend: function(xhr) {
//       // xhr.setRequestHeader("X-Theysaidso-Api-Secret","9lfbA8Lt0DgYlKpNgV4hkweF");
//       // xhr.setRequestHeader('Accept','application/json');
//       //            }
//   }
//   $.ajax(getQuoteCategories);
// });
//*************************************************************************************





