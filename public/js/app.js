var app = angular.module("app", ["firebase","ui.router"]);

app.config(function($urlRouterProvider, $locationProvider, $httpProvider, $stateProvider) {
  // remove '#' from urls
  //$locationProvider.html5Mode(true);
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
      },
      email: function($stateParams) {
        return $stateParams.email
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

app.controller("profileCtrl", function($scope, data, email) {

data.socialProfiles.forEach(function(profile){
  if(profile.typeName === 'Facebook') profile.photoUrl = "img/portfolio/facebook.png";
  if(profile.typeName === 'Twitter') profile.photoUrl = "img/portfolio/twitter.png";
  if(profile.typeName === 'Klout') profile.photoUrl = "img/portfolio/klout.png";
  if(profile.typeName === 'Github') profile.photoUrl = "img/portfolio/github.png";
  if(profile.typeName === 'Angelist') profile.photoUrl = "img/portfolio/angelist.png";
  if(profile.typeName === 'Linkedin') profile.photoUrl = "img/portfolio/linkedin.png";
  if(profile.typeName === 'GooglePlus') profile.photoUrl = "img/portfolio/googleplus.png";
  if(profile.typeName === 'Pinterest') profile.photoUrl = "img/portfolio/pinterest.png";
});

  console.log(data)
  $scope.data = data;
  $scope.email = email;
});


