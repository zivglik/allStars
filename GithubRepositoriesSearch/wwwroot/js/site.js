var myApp = angular.module("AppMain", ["ngRoute"]);
myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "http://localhost:25912/index.html"
        })
        .when("/bookmark", {
            templateUrl: "http://localhost:25912/bookmark.html"
        })
       
});
