serviceModule.factory('ajaxService', ['$http', '$q', function($http, $q) {

    restFactory = {
        postData : function(data, url) {
            if (data) {
                return $http.post(url, data);
            }
        }
    }

    return restFactory;

}]);
