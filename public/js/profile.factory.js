app.factory('Profile', function($http){
	return {
		searchByEmail: function(email) {
			return $http.get('https://api.fullcontact.com/v2/person.json?email='+email+'&apiKey=e689d68b63469839');
		}
	}
});