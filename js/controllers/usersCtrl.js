controllerModule.controller('usersCtrl', function($scope, $uibModal) {
    // $scope.users = [{
  //     "role": "User",
  //     "children": [
  //     {"name": "Venkatesh", "Designation": "SE", "role": "user"},
  //     {"name": "Srikanth", "Designation": "SE", "role": "user"},
  //     {"name": "Naresh", "Designation": "SE", "role": "user"},
  //     {"name": "Abhishek", "Designation": "SE", "role": "user"}
  //     ]},
  //     {
  //     "role": "Admin",
  //     "children": [
  //     {"name": "Pavan", "Designation": "SE", "role": "admin"},
  //     {"name": "Shiva", "Designation": "SE", "role": "admin"},
  //     {"name": "Shamshuddin", "Designation": "SE", "role": "admin"}
  //     ]},
  //     {
  //     "role": "Interviewer",
  //     "children": [
  //     {"name": "Venkatesh", "Designation": "SE", "role": "interviewer"},
  //     {"name": "Shiva", "Designation": "SE", "role": "interviewer"},
  //     {"name": "Shamshuddin", "Designation": "SE", "role": "interviewer"}
  //     ]},
  //     {
  //     "role": "Manager",
  //     "children": [
  //     {"name": "Srikanth", "Designation": "SE", "role": "manager"},
  //     {"name": "Abhishek", "Designation": "SE", "role": "manager"},
  //     {"name": "Naresh", "Designation": "SE", "role": "manager"}
  //     ]}
  // ];

    $scope.getUsers = function(){
      $scope.users=[
        {"id":"1231","name": "Srikanth","email":"ss@ss.com","phone":"1234567890", "requiredRole": "SE","experience":"3.5 years","noticePeriod":"3 months","currentCompany":"XY", "role": "user"},
        {"id":"1232","name": "Shiva","email":"ss@ss.com","phone":"1234567890", "requiredRole": "SSE","experience":"5 years","noticePeriod":"2 months","currentCompany":"XYZ", "role": "user"},
        {"id":"1233","name": "Pavan","email":"ss@ss.com","phone":"1234567890", "requiredRole": "SSE","experience":"4.5 years","noticePeriod":"3 months","currentCompany":"XYZ", "role": "user"},
        {"id":"1234","name": "Venkatesh","email":"ss@ss.com","phone":"1234567890", "requiredRole": "SE","experience":"3.5 years","noticePeriod":"3 months","currentCompany":"XYZ", "role": "user"}
      ];
    }
    $scope.getInterviewers = function(){
      $scope.interviewers=[
        {"id":"1231","name": "Venkatesh","email":"ss@ss.com","phone":"1234567890", "empId": "1234","dept":"UI","designation":"SSE", "role": "interviewer"},
        {"id":"1231","name": "Shamshuddin","email":"ss@ss.com","phone":"1234567890", "empId": "1234","dept":"UI","designation":"PSE", "role": "interviewer"},
        {"id":"1231","name": "Shiva","email":"ss@ss.com","phone":"1234567890", "empId": "1234","dept":"UI","designation":"Associate Lead", "role": "interviewer"},
        {"id":"1231","name": "Srikanth","email":"ss@ss.com","phone":"1234567890", "empId": "1234","dept":"UI","designation":"Technical Lead", "role": "interviewer"}
      ];
    }
    $scope.getManagers = function(){
      $scope.managers=[
        {"name": "Srikanth", "Designation": "SE", "role": "manager"},
        {"name": "Abhishek", "Designation": "SE", "role": "manager"},
        {"name": "Naresh", "Designation": "SE", "role": "manager"},
        {"name": "Naresh", "Designation": "SE", "role": "manager"}
      ];
    }
    $scope.getAdmins = function(){
      $scope.admins=[
        {"id":"1231","name": "Venkatesh","email":"ss@ss.com","phone":"1234567890", "empId": "1234","dept":"UI", "role": "admin"},
        {"id":"1231","name": "Shamshuddin","email":"ss@ss.com","phone":"1234567890", "empId": "1234","dept":"UI", "role": "admin"},
        {"id":"1231","name": "Shiva","email":"ss@ss.com","phone":"1234567890", "empId": "1234","dept":"UI", "role": "admin"},
        {"id":"1231","name": "Srikanth","email":"ss@ss.com","phone":"1234567890", "empId": "1234","dept":"UI", "role": "admin"}
      ];
    }

    $scope.open = function(size,) {
        return $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/usersModal.html',
            controller: function($scope, $uibModalInstance) {
                $scope.ok = function() {

                };

                $scope.cancel = function() {
                    $uibModalInstance.dismiss('cancel');
                };
            },
            size: size
        });
    }

    $scope.edit =function(data){
        return $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/usersModal.html',
            controller: function($scope, $uibModalInstance, ajaxService, CONSTANTS) {
                $scope.username = data.name;
                $scope.department = data.Designation;
                $scope.role = data.role;
                $scope.ok = function() {
                    var postData = {};
                    postData.username = $scope.name;
                    postData.department = $scope.department;
                    postData.role = $scope.role;
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
                        if ($rootScope.department[i].role === id){
                            $rootScope.department[i].departname = data;
                        }
                    }
                };
            }
        });
    }

});
