


myApp.directive("repositoriesSearchResult", ['$http', function ($http) { 
    return {
        templateUrl: 'directives/repositoriesSearchItem.html',
        scope : {
         
            repositoriesSearchObject: "=",
            addToBookmark: "&",
            isShowBookmarkBtn: "="
        
        },
        link: function ($scope, element, attrs) {
            $scope.addToBookmark= function(id,name,avatar_url) {
              
                    var data = {
                        id: id,
                        name: name,
                        avatar_url: avatar_url
                    };

                    var config = {
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8'
                        }
                    }
           
                    $http.post('http://localhost:25912/SessionKeys/AddBookMarkGithubRepository', data, config)
                        .success(function (data, status, headers, config) {
                            $scope.PostDataResponse = data;
                        })
                        .error(function (data, status, header, config) {
                            $scope.ResponseDetails = "Data: " + data +
                                "<hr />status: " + status +
                                "<hr />headers: " + header +
                                "<hr />config: " + config;
                        });
                };

             
            }
        }
    
}]);

myApp.controller("mainCtrl",function($scope,$http){

    $scope.qSearch="";
    $scope.clickSearch = function()
    {
        $scope.viewSearch();
    }

    $scope.keyEnterSearch = function(e)
    {
        if(e.keyCode==13)
        {
            $scope.viewSearch();
        }
    }

    $scope.viewSearch = function(event)
    {
     
            $http.get("https://api.github.com/search/repositories?q="+$scope.qSearch).then(function(response) {
                $scope.arrRepositoriesSearch = response.data;
            });
    }

    $scope.GetBookMarkGithubRepository = function (event) {

        $http.get("http://localhost:25912/SessionKeys/GetBookMarkGithubRepository").then(function (response) {
            
            $scope.arrBookMarkGithubRepositories = response.data;
        });
    }
    
});