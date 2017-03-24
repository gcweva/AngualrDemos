
(function(){
    angular.module('app',[])
    .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'index.html',   controller: demoController}).
     otherwise({redirectTo: '/items'});
    }]);



})()
