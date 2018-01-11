starter.config(function($stateProvider, $urlRouterProvider) 
{
	$stateProvider
    .state('app.home', {
      url: '/home',
      views: {
        /*'header': {
          templateUrl: 'templates/cnd/header.html',
          controller: 'headerCtrl'
        },
        'menu': {
          templateUrl: 'templates/cnd/menu.html',
          controller: 'menuCtrl'
        },
        */
        'content': {
          templateUrl: 'templates/cnd/home.html'/*,
          controller: 'homeCtrl'*/
        }/*,
        'footer': {
          templateUrl: 'templates/cnd/footer.html',
          controller: 'footerCtrl'
        }*/
      }
    })
	/************debut ***************/	
	.state('app.cnd/:page/:sousPage', {
		url: '/:page/:sousPage/all',
		views: {
		  'content': {
		    templateUrl: 'templates/cnd/intro.html',
		    controller: 'pageCtrl'
	  }
	}
	})
	.state('app.cnd/:sport/Régions/:region/home', {
	    url: '/:sport/Régions/:region/home',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/cnd/intro.html',
	    	controller: 'siteCtrl'
	    	/*templateUrl: 'templates/cnd/Sport/home.html',
	    	controller: 'ligueDetailsCtrl'*/
	      }
	    }
	}) 
	.state('app.cnd/:sport/Régions/:region/:categorie', {
	    url: '/:sport/Régions/:region/:categorie',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/cnd/intro.html',
	    	controller: 'sousCtrl'
	    	/*templateUrl: 'templates/cnd/Sport/home.html',
	    	controller: 'ligueDetailsCtrl'*/
	      }
	    }
	}) 
	.state('app.cnd/:sport/Ligues/:ligue/Gestion de ligue/:categorie', {
	    url: '/:sport/Ligues/:ligue/Gestion de ligue/:categorie',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/cnd/intro.html',
	    	controller: 'sousCtrl'
	      }
	    }
	})
	.state('app.cnd/:sport/Ligues/:ligue/Gestion de ligue', {
	    url: '/:sport/Ligues/:ligue/Gestion de ligue',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/cnd/intro.html',
	    	controller: 'siteCtrl'
	      }
	    }
	})
	.state('app.cnd/:sport/Ligues/:ligue/:categorie/add', {
	    url: '/:sport/Ligues/:ligue/:categorie/add',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/cnd/form.html',
	    	controller: 'ligueCategorieAddCtrl'
	      }
	    }
	})
	.state('app.cnd/:sport/Ligues/:ligue/:categorie/details/:id/update', {
	    url: '/:sport/Ligues/:ligue/:categorie/details/:id/update',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/cnd/form.html',
	    	controller: 'ligueCategorieUpdateCtrl'
	      }
	    }
	})
	.state('app.cnd/:sport/Ligues/:ligue/:categorie/details/:id', {
	    url: '/:sport/Ligues/:ligue/:categorie/details/:id',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/cnd/details.html',
	    	controller: 'ligueCategorieDetailsCtrl'
	      }
	    }
	})
	/**************Fin ligues***************/
	;
});