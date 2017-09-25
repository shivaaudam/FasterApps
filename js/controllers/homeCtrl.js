controllerModule.controller('homeCtrl', function($scope, $timeout, $location, $localStorage, $cookieStore, $state, $window) {

  $scope.getPath = function() {
    $timeout(function() {
      $scope.location = $location.path();
      $scope.locationHeader = $scope.location.split("/");
			$scope.locationHeader=$scope.locationHeader[$scope.locationHeader.length-1];
			console.log($scope.locationHeader);
    }, 10);

  }
  // $scope.location = $location.path();
	// $scope.locationHeader = $scope.location.split("/");
	// $scope.locationHeader=$scope.locationHeader[$scope.locationHeader.length-1];
	$scope.getPath();
  $scope.height = $window.innerHeight;
  $scope.toggle = true;
  $scope.userData = $localStorage.userData;
  $scope.toggleSidebar = function() {
    $scope.toggle = !$scope.toggle;
    $cookieStore.put('toggle', $scope.toggle);
  };
  $scope.logOut = function() {
    $localStorage.$reset();
    $state.go('login');
  }

});
