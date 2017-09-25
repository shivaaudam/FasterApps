controllerModule.controller('departmentCtrl', function($scope, $uibModal, ajaxService, CONSTANTS, $rootScope) {

    $rootScope.department = [{
        id: 1,
        departname: "UI"
    }, {
        id: 2,
        departname: "Java"
    }, {
        id: 3,
        departname: "SST"
    }];

    $scope.open = function(size) {
        return $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/departmentModal.html',
            controller: function($scope, $uibModalInstance, ajaxService, CONSTANTS) {
                $scope.ok = function() {
                    var postData = {};
                    postData.department = $scope.departmentName;
                    // var url = CONSTANTS.url+"user/loginuser";
                    // ajaxService.postData(postData, url).then(function(data) {
                    //     $uibModalInstance.dismiss('cancel');
                    // }, function(error) {
                    //     $uibModalInstance.dismiss('cancel');
                    // });
                    $scope.updateData(postData.department);
                    $uibModalInstance.dismiss('cancel');
                };

                $scope.cancel = function() {
                    $uibModalInstance.dismiss('cancel');
                };

                $scope.updateData = function(data){
                    $rootScope.department.push({
                        id: $rootScope.department.length + 1,
                        departname: data
                    });
                };
            },
            size: size
        });
    }

    $scope.edit =function(data){
        return $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/departmentModal.html',
            controller: function($scope, $uibModalInstance, ajaxService, CONSTANTS) {
                $scope.departmentName = data.departname;
                $scope.id = data.id;
                $scope.ok = function() {
                    var postData = {};
                    postData.department = $scope.departmentName;
                    postData.id = $scope.id;
                    // var url = CONSTANTS.url+"user/loginuser";
                    // ajaxService.postData(postData, url).then(function(data) {
                    //     $uibModalInstance.dismiss('cancel');
                    // }, function(error) {
                    //     $uibModalInstance.dismiss('cancel');
                    // });
                    $scope.editData(postData.department, postData.id);
                    $uibModalInstance.dismiss('cancel');
                };

                $scope.cancel = function() {
                    $uibModalInstance.dismiss('cancel');
                };

                $scope.editData = function(data, id){
                    for (var i=0; i < $rootScope.department.length; i++){
                        if ($rootScope.department[i].id === id){
                            $rootScope.department[i].departname = data;
                        }
                    }
                };
            }
        });
    }

    $scope.del =function(data){
                    for (var i=0; i < $rootScope.department.length; i++){
                        if ($rootScope.department[i].id === data.id){
                            $rootScope.department.splice(i,1);
                        }
                    }                                                                                                                                                                                                                                                                                                                                                                             
        
    }

});
