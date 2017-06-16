angular.module('starter.controllers', [])

  .controller('cameraCtrl', function ($scope, $cordovaCamera, $cordovaDialogs, dataApi, $ionicLoading) {
    $scope.imgSrc = [];
/*Pictures*/
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
      // }
      //         function cameraSuccess(uri){
      // //alert(uri)
      // takePicture()
/*Saving Pictures in Array*/
      $cordovaCamera.getPicture().then(function (imageData) {
        // Success! Image data is here
        $scope.imgSrc.push(imageData);
        $scope.takePic();
      }, function (err) {
        $cordovaDialogs.alert('An error occured: ' + err)
      })
    }
/*Upload Function*/
    $scope.upload = function(){
       alert('Uploading '+ $scope.imgSrc.length + ' images');
       var i = 0;
        $scope.imgSrc.forEach(function(img){
        dataApi.upload(img,function(i){
          i++;
          if(i == $scope.imgSrc.length){
          alert(uploaded +" " + i + " images");
          }
        })
    });
    //alert('Click convert to convert images')
  }
/*Convert Function*/
  $scope.convert = function(){
    $scope.imgSrc = [];
    dataApi.convert();
  }
  })

  .controller('ArchiveCtrl', function ($scope, dataApi, $cordovaFileOpener2) {
    dataApi.download(function (imageSrc) {
      $scope.imgSrc = imageSrc
        $cordovaFileOpener2.open(imageSrc,'application/octet-stream')
          .then(function() {
          alert('file opened successfully')
      }, 
        function(err) {
      alert('An error occurred');
  });
      alert($scope.imgSrc)
    })
  })
