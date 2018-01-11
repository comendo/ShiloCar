angular.module('starter.controllers', [])
.controller('AppCtrl', function($scope, $ionicModal, $timeout, googleService) {
  function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  /*$scope.login = function() {
    $scope.modal.show();
  };*/
  $scope.login = function () {
  	GAuth.login().then(function(user) {
                console.log(user.name + ' is logged in');
                $state.go('webapp.home'); // action after the user have validated that
        				                  // your application can access their Google account
            }, function() {
                console.log('login failed');
            });
	};

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('homeCtrl', function($scope, safeApply) {//page qui permet a l'utilisateur de choisir un sport
	console.warn("je suis dans homeCtrl");
	//déclaration de la variable
	$scope.sports = [];
	var CND_Sport = firebase.database().ref();//retourne la base de données depuis la racine
	
	CND_Sport.on("value", function(snapshot){
		safeApply($scope, function() {
			$scope.sports = snapshot.val();
			console.warn("$scope.sports:",$scope.sports);
		 }); 
	 }); 
});