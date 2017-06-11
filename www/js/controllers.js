angular.module('starter.controllers', [])

  .controller('cameraCtrl', function ($scope, $cordovaCamera, $cordovaDialogs, $cordovaAppAvailability) {
    document.addEventListener('deviceready', function () {
      $cordovaAppAvailability.check('twitter://')
        .then(function () {
          alert('is available')
        }, function () {
          alert('not available')
        })
    }, false)
    $scope.imgSrc = []
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

      $cordovaCamera.getPicture().then(function (imageData) {
        // Success! Image data is here
        $scope.imgSrc.push(imageData)
        $scope.takePic()
      }, function (err) {
        $cordovaDialogs.alert('An error occured: ' + err)
      })
    }
  })

  .controller('ArchiveCtrl', function ($scope, dataApi) {
    dataApi.download(function (imageSrc) {
      $scope.imgSrc = imageSrc
      alert($scope.imgSrc)
    })
  })
