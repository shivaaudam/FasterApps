// var myApp = angular.module("myApp", []);
// myApp.controller("RegisterCtrl", function ($scope) {
// 	var registration= this;
// 	console.log(registration);
//        });


// Save this as mycode.js
angular.module('myApp', [])
    .controller('MyFormCtrl', [function() {
 
        this.user = {
             fisrtName: '',
             lastName:'',
             email: '',
             password:''
        };
 
        this.register = function() {
           console.log('User clicked register', this.user);
        };
    }]);
