angular.module('starter.services', [])

.factory('dataApi', function($ionicLoading, $q){
    // function dataService(callback){
    var deferred = $q.defer();
    // $ionicLoading.show({template : 'Loading..'})
    // $http.get("https://2f0a7695.ngrok.io/data") //The server request goes here
    //     .success(function(data){
    //        $ionicLoading.hide();
    //        deferred.resolve(data)

    //     })
    //     .error(function(){alert('Error')
    //     $ionicLoading.hide();
    //     deferred.reject();
    // })
    // return deferred.promise;
    function download(cb){
        $ionicLoading.show({
       template: 'Loading...'
     });
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fs) {
        fs.root.getDirectory(
            "3Dobjects",
            {
                create: true
            },
            function(dirEntry) {
                alert('created dir');//
                dirEntry.getFile(
                    "test.ply",
                    {
                        create: true,
                        exclusive: false
                    },
                    function gotFileEntry(fe) {
                        alert('file entry');
                        var p = fe.toURL();
                        //fe.remove();
                        ft = new FileTransfer();
                        ft.download(
                            encodeURI("http://29d86399.ngrok.io/data"),
                            p,
                            function(entry) {
                                alert('downloaded');
                                 $ionicLoading.hide();
                                 var imgFile = entry.toURL();
                                alert(imgFile);
                                cb(imgFile); 
                            },
                            function(error) {
                                $ionicLoading.hide();
                                alert("Download Error Source -> " + error.source);
                            },
                            false,
                            null
                        );
                    },
                    function() {
                        $ionicLoading.hide();
                        console.log("Get file failed");
                    }
                );
            }
        );
    },
    function() {
        $ionicLoading.hide();
        console.log("Request for filesystem failed");
    });
 }

    function upload(){
    }

    return{
      download : download,
      upload : upload
      }
    });
