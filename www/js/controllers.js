angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('AboutCtrl', function($scope, Chats){
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('cameraCtrl', function($scope, $cordovaCamera, $cordovaDialogs){
  $scope.takePic = function () {
            // var options = {
            //     quality: 75,
            //     destinationType: Camera.DestinationType.DATA_URL,
            //     sourceType: Camera.PictureSourceType.CAMERA,
            //     allowEdit: true,
            //     encodingType: Camera.EncodingType.JPEG,
            //     targetWidth: 300,
            //     targetHeight: 300,
            //     popoverOptions: CameraPopoverOptions,
            //     saveToPhotoAlbum: false
           // };
    //         function cameraSuccess(uri){   
    // //alert(uri);
    // takePicture();    

    $cordovaCamera.getPicture().then(function (imageData) {
                // Success! Image data is here
                $scope.imgSrc = [];
                $scope.imgSrc.push(imageData);
                $scope.takePic()
            },function (err) {
                $cordovaDialogs.alert("An error occured: " + err);
            });
        };
})

.controller('ArchiveCtrl', function($scope, dataApi){
  dataApi.dataService().then(function(data){
    $scope.data = data;
  })
  console.log($scope.data)
  });

