controllerModule.controller('loginCtrl', function($scope, $localStorage, ajaxService, sha256, $state, CONSTANTS,$window) {
    $scope.height=$window.innerHeight;
   $scope.login = function() {
        var userData = this.user;
        userData.password = sha256.convertToSHA256(this.user.password);
        var url = CONSTANTS.url+"login";
         ajaxService.postData(userData, url).then(function(resp){
            console.log(data);
            $state.go('home.dashboard');
            $localStorage.userData=resp.data.data;
         }, function(error){
            $state.go('home.login');
         });
    }
});
