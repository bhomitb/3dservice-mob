angular.module('starter.services', [])

.factory('Convapi',['$http' ,  function($http) {

    function dataCall(callback){
      $http.get("10.212.12.144:3000/converting") //The server request goes here
        .success(function(data){
          callback(data)
        })
    };
}]);
