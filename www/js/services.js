angular.module('starter.services', [])

.factory('dataApi', function($http, $q, $ionicLoading){
    function dataService(callback){
    var deferred = $q.defer();
    $ionicLoading.show({template : 'Loading..'})
    $http.get("http://33016eb7.ngrok.io/data") //The server request goes here
        .success(function(data){
           $ionicLoading.hide();
           deferred.resolve(data)
          
        })
        .error(function(){alert('Error')
        $ionicLoading.hide();
        deferred.reject();
    })
    return deferred.promise;
    }
    return{
      dataService : dataService
      }
    });   