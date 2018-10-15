var myApp = angular.module("AppMain", ["ngRoute"]);
myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "index.html"
        })
        .when("/bookmark", {
            templateUrl: "bookmark.html"
        })
       
});
