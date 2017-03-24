(function(){

angular.module('demoApp',[]).controller('demoController',['$scope','$http',function($scope,$http){


$scope.validate=function(login){

if(login && login.username && login.password){

    console.log("login successful");
    

    
}}



// call Json using $http to get customized values.
// $http({
//   method: 'GET',
//   url: '/POC/POC4/userJson.js'
// }).then(function successCallback(response) {
//     // this callback will be called asynchronously
//     // when the response is available
//     console.log("successCallback");
//   }, function errorCallback(response) {
// console.log("errorCallback");
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.
//   });console.log('asd');debugger;















}])



})()