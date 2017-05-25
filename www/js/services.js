angular.module('starter.services', [])

.factory('dataApi', function($http, $q, $ionicLoading){
    function dataService(callback){
    var deferred = $q.defer();
    $ionicLoading.show({template : 'Loading..'})
    $http.get("10.212.8.1:3000/data") //The server request goes here
        .success(function(data){
            $ionicLoading.hide();
           deferred.resolve(data)
        })
        return deferred.promise;
    }
    return{
      dataService : dataService
      }
    });   