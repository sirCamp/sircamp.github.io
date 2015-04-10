(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


//APP
var sircamp = angular.module('sircamp', ['ngRoute']);


//ROUTE
sircamp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
    .when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'mainController'
    })

    // route for the about page
   /* .when('/about', {
        templateUrl : 'pages/about.html',
        controller  : 'aboutController'
    })*/

    // route for the contact page
    .when('/contact', {
        templateUrl : 'pages/contact.html',
        controller  : 'contactController'
    });
});


//CONTROLLER
sircamp.controller('mainController', function($scope) {

	$scope.message = 'Everyone come and see how good I look!';
});


sircamp.controller('contactController', function($scope) {

	$scope.message = 'Everyone come and see how good I look!';
});