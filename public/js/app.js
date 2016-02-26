var app = angular.module("app", ["firebase","ui.router"]);

app.config(function($urlRouterProvider, $locationProvider, $httpProvider, $stateProvider) {
  // remove '#' from urls
  // $locationProvider.html5Mode(true);
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
  // data.socialProfiles.forEach(function(profile) {
  //   var photo = data.photos.filter(function(p) {
  //     return p.typeName === profile.typeName
  //   })[0]
  //   if(photo) profile.photoUrl = photo.url
  //   else profile.photoUrl = "img/portfolio/cake.png";
  // });

data.socialProfiles.forEach(function(profile){
  if(profile.typeName === 'Facebook') profile.photoUrl = "img/portfolio/facebook.png";
  else if(profile.typeName === 'Twitter') profile.photoUrl = "img/portfolio/twitter.png";
  else if(profile.typeName === 'Klout') profile.photoUrl = "img/portfolio/klout.png";
  else if(profile.typeName === 'Github') profile.photoUrl = "img/portfolio/github.png";
  else if(profile.typeName === 'AngelList') profile.photoUrl = "img/portfolio/angelist.png";
  else if(profile.typeName === 'LinkedIn') profile.photoUrl = "img/portfolio/linkedin.png";
  else if(profile.typeName === 'GooglePlus') profile.photoUrl = "img/portfolio/googleplus.png";
  else if(profile.typeName === 'Pinterest') profile.photoUrl = "img/portfolio/pinterest.png";
  else if(profile.typeName === 'Foursquare') profile.photoUrl = "img/portfolio/foursquare.png";
  else if(profile.typeName === 'Vimeo') profile.photoUrl = "img/portfolio/viemo.png";
  else if(profile.typeName === 'Myspace') profile.photoUrl = "img/portfolio/myspace.png";
  else if(profile.typeName === 'Flickr') profile.photoUrl = "img/portfolio/flickr.png";
  else if(profile.typeName === 'Gravatar') profile.photoUrl = "img/portfolio/gravatar.png";
  else profile.photoUrl = "img/portfolio/submarine.png"


})

  console.log(data)
  $scope.data = data
});


