angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('AboutCtrl', function($scope, Chats){
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('cameraCtrl', function($scope) {
 $scope.takePicture = function() {
 }
})

.controller('ArchiveCtrl', function($scope,dataApi){
  dataApi.dataService().then(function(data){
    $scope.data = data;
  })
  console.log($scope.data)
  });

