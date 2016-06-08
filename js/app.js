// defined application
angular.module('CollegePass',['CollegePass.factories','CollegePass.controllers','ui.router','ngStorage','xeditable'])

// view routing
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    
    // main view
    .state('app', {
        url: "/app",
        templateUrl: "templates/app.html", // main view template
        controller: "AppController" // main view controller
    });
    
    $urlRouterProvider.otherwise('/app');
})