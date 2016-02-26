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
    url: "/profile/:email" ,
    templateUrl: "../templates/profile.template.html",
    resolve: {
      data: function ($stateParams, Profile) {
        return Profile.searchByEmail($stateParams.email)
                .then(function (response) {
                  return response.data
                })
      }
    },
    controller: 'profileCtrl'
  })

})

app.controller("main", function($scope,Profile,$state) {

  $scope.search = function(){
  	//make request using to api
    $state.go('profile', {"email":$scope.email})
  }

});

app.controller("profileCtrl", function($scope, data) {
  data.socialProfiles.forEach(function(profile) {
    var photo = data.photos.filter(function(p) {
      return p.typeName === profile.typeName
    })[0]
    if(photo) profile.photoUrl = photo.url
    else profile.photoUrl = "img/portfolio/cake.png";
  });

  console.log(data)
  $scope.data = data
});


