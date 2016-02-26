var app = angular.module("app", ["firebase","ui.router"]);

app.config(function($urlRouterProvider, $locationProvider, $httpProvider, $stateProvider) {
  // remove '#' from urls
  $locationProvider.html5Mode(true);
  // invalid routes redirect to the root
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('main', {
    url: "/" ,
    templateUrl:"../templates/search.template.html",
    controller: 'main'
  })

  $stateProvider.state('profile', {
    url: "/profile" ,
    templateUrl: "../templates/profile.template.html",
    controller: 'profileCtrl'
  })

})

app.controller("main", function($scope) {

  $scope.search = function(email){
  	//make request using to api
    // $state.go('profile',{email:email})
  	//get info

  	//add to db 
  }

});

app.controller("profileCtrl", function($scope) {

});


