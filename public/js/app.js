var app = angular.module("app", ["firebase"]);




app.controller("SampleCtrl", function($scope, $firebaseObject, $http) {
  var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com/data");
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");

  $scope.search = function(email){
  	//make request using to api

  	//get info

  	//add to db 
  }

});

