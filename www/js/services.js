angular.module('starter.services', [])

.factory('dataApi', function($http, $q, $ionicLoading){
    function dataService(callback){
    var deferred = $q.defer();
    $ionicLoading.show({template : 'Loading..'})
    $http.get("https://demo4227557.mockable.io/data") //The server request goes here
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