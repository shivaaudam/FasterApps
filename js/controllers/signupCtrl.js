controllerModule.controller('signupCtrl', function($scope, $http, sha256, $state, $window, ajaxService, CONSTANTS) {
    $scope.height=$window.innerHeight;
    $scope.register = function() {
        var userData = this.user;
        userData.error="";
        userData.password = sha256.convertToSHA256(this.user.password);
        var url = CONSTANTS.url+"register";
         ajaxService.postData(userData, url).then(function(resp){
            console.log("test"+resp.statusText);
            if(resp.statusText==="OK" && resp.data.status==="success"){
                $state.go('home.dashboard');
            }
            else{
                userData.error = resp.data.message.
                console.log(userData);
            }
         }, function(error){
            //$state.go('home.dashboard');
            console.log(error);
         });
    }

    $scope.reset = function() {
        console.log($scope.user);
    };

    $scope.backToLogin = function(){
        $state.go('home.login');
    }
});
