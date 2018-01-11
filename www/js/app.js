// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js 
var starter = angular.module('starter', ['ionic', 'starter.controllers', 'ngTable', 'angular-google-gapi','pascalprecht.translate','angular-momentjs', 'ion-gallery', 'aCarousel'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.factory('safeApply', [function($rootScope) {
    return function($scope, fn) {
        var phase = $scope.$root.$$phase;
        if(phase == '$apply' || phase == '$digest') {
            if (fn) {
                $scope.$eval(fn);
            }
        } else {
            if (fn) {
                $scope.$apply(fn);
            } else {
                $scope.$apply();
            }
        }
    }
}])

.service('comendo', function ($scope) {
//	return {
		//print:function (div) {
		this.print = function (div) {
	    	var docHead = document.head.outerHTML,
	    	printContents = document.getElementById(div).outerHTML,
	    	winAttr = "location=yes, statusbar=no, menubar=no, titlebar=no, toolbar=no,dependent=no, width=865, height=600, resizable=yes, screenX=200, screenY=200, personalbar=no, scrollbars=yes",
			newWin = window.open("", "_blank", winAttr),
			writeDoc = newWin.document;
			
		  	writeDoc.open();
		  	writeDoc.write('<!doctype html><html>' + docHead + '<body onLoad="window.print()">' + printContents + '</body></html>');
		  	writeDoc.close();
		  	newWin.focus();
		};
	//};	
})
.factory('socket', function ($rootScope) {
 // var socket = io.connect("http://51.254.119.71:2300");
  var socket = io.connect();
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {  
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    }
  };
})
.config(function(ionGalleryConfigProvider) {
  ionGalleryConfigProvider.setGalleryConfig({
                          action_label: 'Fermer',
                          toggle: false,
                          row_size: 2,
                          fixed_row_size: false
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/cnd/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/cnd/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/cnd/browse.html'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/users/add');
  $urlRouterProvider.otherwise('/app/home');
})
.service('googleService', ['$http', '$rootScope', '$q', function ($http, $rootScope, $q) {
            var clientId = '859687445627-pb85oueqh57s2vpp16jlti67927jf63r.apps.googleusercontent.com',
                apiKey = 'AIzaSyBQbLgbUVPZf6erzPZ0qq5abi1fjw13HAc',
                scopes = 'https://www.googleapis.com/auth/spreadsheets.readonly',
                domain = '',
                deferred = $q.defer();

            this.login = function () {
                gapi.auth.authorize({ 
                    client_id: clientId, 
                    scope: scopes, 
                    immediate: false, 
                    hd: domain 
                }, this.handleAuthResult);

                return deferred.promise;
            }

            this.handleClientLoad = function () {
                gapi.client.setApiKey(apiKey);
                gapi.auth.init(function () { });
                window.setTimeout(checkAuth, 1);
            };

            this.checkAuth = function() {
                gapi.auth.authorize({ 
                    client_id: clientId, 
                    scope: scopes, 
                    immediate: true, 
                    hd: domain 
                }, this.handleAuthResult);
            };

            this.handleAuthResult = function(authResult) {
                if (authResult && !authResult.error) {
                    var data = {};
                    gapi.client.load('oauth2', 'v2', function () {
                        var request = gapi.client.oauth2.userinfo.get();
                        request.execute(function (resp) {
                            data.email = resp.email;
                        });
                    });
                    deferred.resolve(data);
                } else {
                    deferred.reject('error');
                }
            };

            this.handleAuthClick = function(event) {
                gapi.auth.authorize({ 
                    client_id: clientId, 
                    scope: scopes, 
                    immediate: false, 
                    hd: domain 
                }, this.handleAuthResult);
                return false;
            };

}])
.run(['GAuth', 'GApi', 'GData', '$state', '$rootScope',
    function(GAuth, GApi, GData, $state, $rootScope) {

        $rootScope.gdata = GData;

        var CLIENT = 'AIzaSyDGfPVrkyv3CL204APJneT3cKNRQlI78zM';
        var BASE = 'https://afpc-fb71c.appspot.com';

        GApi.load('myApiName','v1',BASE);
        GApi.load('calendar','v3'); // for google api (https://developers.google.com/apis-explorer/)

        GAuth.setClient(CLIENT)
        // default scope is only https://www.googleapis.com/auth/userinfo.email
        GAuth.setScope('https://www.googleapis.com/auth/spreadsheets');

        // load the auth api so that it doesn't have to be loaded asynchronously
        // when the user clicks the 'login' button.
        // That would lead to popup blockers blocking the auth window
        GAuth.load();

        // or just call checkAuth, which in turn does load the oauth api.
        // if you do that, GAuth.load(); is unnecessary
        GAuth.checkAuth().then(
            function (user) {
                console.log(user.name + ' is logged in');
                $state.go('app.home'); // an example of action if it's possible to
                			  	        // authenticate user at startup of the application
            },
            function() {
		        $state.go('app'); // an example of action if it's impossible to
					  	          // authenticate user at startup of the application
            }
        );
    }
]);
