starter.controller('homeCtrl', function($rootScope, $scope, $stateParams, $ionicSlideBoxDelegate, safeApply, $timeout) {
	console.warn("je suis dans homeCtrl");
	if($rootScope.page !== undefined)$rootScope.page = $stateParams.page;
	else $rootScope.page = "1-Accueil";
	if($rootScope.sousPage !== undefined)$rootScope.sousPage = $stateParams.sousPage;
	else $rootScope.sousPage = "Marques les plus demandées";
	$scope.items = [];
	console.log("$rootScope.page:",$rootScope.page);
	console.log("$rootScope.sousPage:",$rootScope.sousPage);
	 
	
	/************code carousel debut************/
	var vm = this
	$scope.arr = [];
    vm.options = {
        unselectOthers:false
    };
    var options = {
    template      : null, // templateUrl in case you don't need to pass a directive but just a html view
    align         : 'left', // alignement of the carousel
    centerOnSelect: true, // center carousel when an item is selected
    trackBy       : '$index',  // indicate a track by property
    selectFirst   : true, // select first carousel item at start
    selectAtStart : {    // optional => Select at start the item with the property (string) with value passed
        property: null,
        value   : null
    },
    pullRefresh   : {  // optional => set active to true for pull refresh passing a callBack
        active  : false,
        callBack: angular.noop
    }
};
	vm.carouselOptions7 = {
            carouselId:'carousel-7',
            align:'left',
            selectFirst:true,
            centerOnSelect:false,
            template:'carousel-templates/demo-3.html'
    };
    
    vm.carouselOptionsForLoop = {
        align         : 'left',
        selectFirst   : true,
        centerOnSelect: true,
        template      : 'carousel-templates/demo-1.html'
    };

    vm.onSelectCarousel = onSelectCarousel;
    vm.addItemsCarousel = addItemsCarousel;
    vm.openModal        = openModal;
    /************************/
                bdd_marques = firebase.database().ref('/www/templates/'+$rootScope.page+'/Toutes les marques');
                bdd_marques.on("value", function(snapshot){
                snapshot.forEach(function(childSnapshot) {
	 			safeApply($scope, function() {
		 			if(childSnapshot.key == 0)
		 			{
		 				$scope.label = childSnapshot.val();
					}
					else
					{
		 				$scope.data = childSnapshot.val();	
		 				model = {
	                        id     : $scope.data[0],
	                        display: $scope.data[0],
	                        src:'https://firebasestorage.googleapis.com/v0/b/shilocar-27f6f.appspot.com/o/logos_voitures%2F'+$scope.data[0].toLowerCase()+'.png?alt=media&token=0e23cffd-dca2-4fd0-aa1c-c9bdaeff5d10/'
	                    };
		 				$scope.arr.push(model);
		 				console.warn("$scope.items:",$scope.items);					     		 
					}
				});
			});
			//safeApply($scope, function() {
				activate();
				//});
		});
                /************************/
    
    function activate() {
		console.warn("activate est activé,lol!");
        // Mock data for carousel
        vm.carouselData7 = createArray(15, true);
        
        vm.loopItems = [
                {
                    id:0,
                    carouselId:'carousel-8',
                    arrayData:createArray(6)
                },
                {
                    id:1,
                    carouselId:'carousel-9',
                    arrayData:createArray(8)
                },
                {
                    id:2,
                    carouselId:'carousel-10',
                    arrayData:createArray(4)
                }
            ];

            // To be able to use the carousel inside a modal we need to set the properties on the $scope object
            $scope.carouselOptions1 = vm.carouselOptions1;
            $scope.carouselData1    = vm.carouselData1;
            $scope.onSelectCarousel = vm.onSelectCarousel;
            $scope.closeModal       = closeModal;

        function createArray(total, randomImg) {
            randomImg = typeof randomImg === 'undefined' ? false : randomImg;
            
            console.warn("arr*******************:",$scope.arr);
            $scope.$broadcast('a-carousel.arrayupdated', 'carousel-7');
            return $scope.arr;
        }
    }

    function onSelectCarousel(item) {
        // console.log('Carousel item selected:', item);
        vm.itemSelected = item;

        // unselect all carousel with id that contains string except one
        if (vm.options.unselectOthers) {
            $scope.$broadcast('a-carousel.desactivateItem', {idContains:'carousel-', except:item.carouselId})
        }
    }

    // Example add 4 elements to carousel 7
    function addItemsCarousel(total) {
        var i, model
        var oldLength = vm.carouselData7.length;
        for(i = 0; i < total; i++) {
            model = getModelImageItem(oldLength + i);
            vm.carouselData7.push(model);
        }

        // Tell carousel 6 that its array has been updated
        $scope.$broadcast('a-carousel.arrayupdated', 'carousel-7');
    }
    
    function openModal() {
            var templateModal = '<ion-modal-view><ion-header-bar><h2>Inside a Modal</h2></ion-header-bar>' +
                '<ion-content><button class="btn" ng-click="closeModal()">Close modal</button><br><a-carousel item-directive="carousel-text-item" ' +
                'carousel-options="carouselOptions1" array-provider="carouselData1" ' +
                'on-select="onSelectCarousel(item)"></a-carousel></ion-content></ion-modal-view>';
            modal             = $ionicModal.fromTemplate(templateModal, {
                scope: $scope
            });
            modal.show();
        }

	function getModelImageItem(id) {
            var imgId = Math.floor(Math.random() * 10000);
            return {
                id:id,
                src:'http://lorempixel.com/120/80/?' + imgId
            }
        }
    /************code carousel fin************/
	
	starCountRef = firebase.database().ref('/www/templates/'+$rootScope.page);//retourne la base de données
	starCountRef.on("value", function(snapshot){
		console.log("*****************snapshot_test********:", snapshot.key);
		$rootScope.cont = snapshot.val();
		console.warn("$rootScope.cont1 :",$rootScope.cont);
		
		snapshot.forEach(function(childSnapshot) {
 			safeApply($scope, function() {
	 			if(childSnapshot.key == 0)
	 			{
	 				$scope.label = childSnapshot.val();						     		
				}
				else
				{
	 				$scope.data = childSnapshot.val();	
	 				var test = 
					  {
					    src:'http://www.comendo.fr:1001/img/AUDI.png',
					    //src:'http://www.comendo.fr:1001/img/'+$scope.data[0]+'.png',
					    sub: $scope.data[0]
					  };
	 				$scope.items.push(test);
	 				//console.warn("details test "+$rootScope.id +":", $scope.data);					     		 
				}
			});
		});
		console.warn("$scope.label:",$scope.label);
		console.warn("/////////////$scope.data///////////////:",$scope.data);
	  	$scope.hydrate = function(data)
	  	{
			//console.log("cdc:", cdc);
			$scope.data = data;
		};
		$scope.lower = function(mot)
	  	{
	  		var texte = mot.toLowerCase();
			return texte;
		};
		$scope.menu = function(page)
	  	{
	  		console.warn("++++++++++++++++++++++++++++++++");
	  		$state.go('app.'+page);
	  		 
		};
		$ionicSlideBoxDelegate.update();
	 });
	
	

	//$scope.toutes_marques = function(sousPage)
	function toutes_marques(sousPage)
	{
	 	bdd_marques = firebase.database().ref('/www/templates/'+$rootScope.page+'/'+sousPage);//retourne la base de données
		bdd_marques.on("value", function(snapshot){
			console.log("*****************clé marque********:", snapshot.key);
			$scope.valeur = snapshot.val();
			console.warn("$rootScope.valeur :",$rootScope.valeur);
			 
			snapshot.forEach(function(childSnapshot) {
	 			safeApply($scope, function() {
		 			if(childSnapshot.key == 0)
		 			{
		 				$scope.label = childSnapshot.val();						     		
					}
					else
					{
		 				$scope.data = childSnapshot.val();	
		 				var test = 
						  {
						    //src:'http://www.comendo.fr:1001/img/AUDI.png',
						    src:'https://firebasestorage.googleapis.com/v0/b/shilocar-27f6f.appspot.com/o/logos_voitures%2F'+$scope.data[0].toLowerCase()+'.png?alt=media&token=0e23cffd-dca2-4fd0-aa1c-c9bdaeff5d10/',
						    //src:'http://www.comendo.fr:1001/img/'+$scope.data[0]+'.png',
						    sub: $scope.data[0]
						  };
		 				$scope.items.push(test);
		 				console.warn("$scope.items:",$scope.items);					     		 
					}
				});
			});
		});
	 };
	 
    console.warn("$rootScope.cont2 :",$rootScope.cont);
})
.controller('menuCtrl', function($rootScope, $scope, $stateParams, $state, safeApply, NgTableParams) {//page qui permet a l'utilisateur de choisir un sport
	console.warn("je suis dans menuCtrl");
	
	//declaration des variables
	if($stateParams.page == null)
	$stateParams.page = $rootScope.page;
	if($stateParams.sousPage == null)
	$stateParams.sousPage = $rootScope.sousPage;
	$rootScope.site = [];
 	var starCountRef = firebase.database().ref('/www/templates/');//retourne la base de données
    
	$scope.modifier_nom = function(page)
	{
		var mot = page.split("-");
		if(mot[1] === "undefined" || mot[1] === undefined)mot[1] = page;
		if(mot[2] !== undefined)mot[1] = mot[1]+'-'+mot[2];
		//console.warn("mot:",mot[1]);
		return mot[1];
	};
	$scope.change_page = function(page)
	{
		//$rootScope.page = page;	
		$rootScope.enCours = page;	
		console.warn("page:",page);
		console.warn("$rootScope.page:",$rootScope.page);
	};
 	$scope.change_sous = function(sous, contenu)
	{
		//$scope.testo = "templates/Sport/"+$rootScope.sport+"/teste.html";
		//$scope.testo = "templates/Sport/"+$rootScope.sport+"/Ligues/"+$rootScope.region+"/Gestion de ligue/"+sous+".html";
		$scope.testo = "templates/cnd/Joueurs.html";
		safeApply($scope, function() {
			$rootScope.sous_cat = sous;	
			$rootScope.cont = contenu;		
		});	
	};
 	
	starCountRef.on("value", function(snapshot){
		console.log("*****************snapshot_test********:", snapshot.key);
		$rootScope.site = snapshot.val();
	 });   	
	 
	 $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };	   
})
.controller('contentCtrl', function($scope, safeApply) {//page qui permet a l'utilisateur de choisir un sport
	console.warn("je suis dans contentCtrl");
	//déclaration de la variable
	$scope.home = [];
	var CND_home = firebase.database().ref();//retourne la base de données depuis la racine
	
	CND_home.on("value", function(snapshot){
		safeApply($scope, function() {
			$scope.home = snapshot.val();
			console.warn("$scope.home:",$scope.home);
		 }); 
	 }); 
})
.controller('headerCtrl', function($scope, safeApply) {//page qui permet a l'utilisateur de choisir un sport
	console.warn("je suis dans headerCtrl");
	//déclaration de la variable
	$scope.home = [];
	var CND_home = firebase.database().ref();//retourne la base de données depuis la racine
	
	CND_home.on("value", function(snapshot){
		safeApply($scope, function() {
			$scope.home = snapshot.val();
			console.warn("$scope.home:",$scope.home);
		 }); 
	 }); 
})
.controller('footerCtrl', function($scope, safeApply) {//page qui permet a l'utilisateur de choisir un sport
	console.warn("je suis dans footerCtrl");
	//déclaration de la variable
	$scope.home = [];
	var CND_home = firebase.database().ref();//retourne la base de données depuis la racine
	
	CND_home.on("value", function(snapshot){
		safeApply($scope, function() {
			$scope.home = snapshot.val();
			console.warn("$scope.home:",$scope.home);
		 }); 
	 }); 
})
.controller('pageCtrl', function($rootScope, $scope, $stateParams, $ionicSlideBoxDelegate, safeApply) {
	console.warn("je suis dans pageCtrl");
	
	if($rootScope.page !== undefined)$rootScope.page = $stateParams.page;
	else $rootScope.page = "1-Accueil";
	if($rootScope.sousPage !== undefined)$rootScope.sousPage = $stateParams.sousPage;
	else $rootScope.sousPage = "Marques les plus demandées";
	$scope.items = [];
	console.log("$rootScope.page:",$rootScope.page);
	console.log("$rootScope.sousPage:",$rootScope.sousPage);
	
	
	starCountRef = firebase.database().ref('/www/templates/'+$rootScope.page+'/'+$rootScope.sousPage);//retourne la base de données
	starCountRef.on("value", function(snapshot){
		console.log("*****************snapshot_test********:", snapshot.key);
		$rootScope.cont = snapshot.val();
		console.warn("$rootScope.cont1 :",$rootScope.cont);
		
		snapshot.forEach(function(childSnapshot) {
 			safeApply($scope, function() {
	 			if(childSnapshot.key == 0)
	 			{
	 				$scope.label = childSnapshot.val();						     		
				}
				else
				{
	 				$scope.data = childSnapshot.val();	
	 				var test = 
					  {
					    src:'http://www.comendo.fr:1001/img/AUDI.png',
					    //src:'http://www.comendo.fr:1001/img/'+$scope.data[0]+'.png',
					    sub: $scope.data[0]
					  };
	 				$scope.items.push(test);
	 				//console.warn("details test "+$rootScope.id +":", $scope.data);					     		 
				}
			});
		});
		console.warn("$scope.label:",$scope.label);
		console.warn("/////////////$scope.data///////////////:",$scope.data);
	  	$scope.hydrate = function(data)
	  	{
			//console.log("cdc:", cdc);
			$scope.data = data;
		};
		$scope.lower = function(mot)
	  	{
	  		var texte = mot.toLowerCase();
			return texte;
		};
		$scope.menu = function(page)
	  	{
	  		console.warn("++++++++++++++++++++++++++++++++");
	  		$state.go('app.'+page);
	  		 
		};
		$ionicSlideBoxDelegate.update();
	 });
    console.warn("$rootScope.cont2 :",$rootScope.cont);
    
    /**************************************************************************/
    var vm = this;

        vm.options = {
            unselectOthers:false
        };

        // Carousel Options
        vm.carouselOptions1 = {
            carouselId:'carousel-1',
            align:'left',
            selectFirst:true,
            centerOnSelect:true
        };

        vm.carouselOptions2 = {
            carouselId:'carousel-2',
            align:'right',
            selectFirst:true,
            centerOnSelect:true
        };

        vm.carouselOptions3 = {
            carouselId:'carousel-3',
            align:'left',
            selectFirst:false,
            centerOnSelect:false
        };

        vm.carouselOptions4 = {
            carouselId:'carousel-4',
            align:'left',
            selectFirst:true,
            centerOnSelect:true,
            template:'carousel-templates/demo-1.html'
        };

        vm.carouselOptions5 = {
            carouselId:'carousel-5',
            align:'center',
            selectFirst:true,
            centerOnSelect:true,
            template:'carousel-templates/demo-2.html'
        };

        vm.carouselOptions6 = {
            carouselId:'carousel-6',
            align:'left',
            selectFirst:false,
            centerOnSelect:false,
            template:'carousel-templates/demo-3.html',
            pullRefresh   : {
                active  : true,
                callBack: pullRefresh
            }
        };

        vm.carouselOptions7 = {
            carouselId:'carousel-7',
            align:'left',
            selectFirst:true,
            centerOnSelect:false,
            template:'carousel-templates/demo-3.html'
        };

        vm.onSelectCarousel = onSelectCarousel;
        vm.addItemsCarousel = addItemsCarousel;
        activate();

        function activate() {

            // Mock data for carousel
            vm.carouselData1  = createArray(20);
            vm.carouselData2 = createArray(5);
            vm.carouselData3 = createArray(3);
            vm.carouselData4 = createArray(6);
            vm.carouselData5 = createArray(3);
            vm.carouselData6 = createArray(5, true);
            vm.carouselData7 = createArray(3, true);

            function createArray(total, randomImg) {
                randomImg = typeof randomImg === 'undefined' ? false : randomImg;
                var i, model, imgId, arr = [];
                for (i = 0; i < total; i++) {
                    model = {
                        id     : i,
                        display: 'item ' + i
                    };
                    if (i === 2 || i === 13){
                        model.display = 'longer ' + model.display;
                    }
                    if (randomImg) {
                        imgId = Math.floor(Math.random() * 10000);
                        model.src =  'http://lorempixel.com/120/80/?' + imgId
                    }
                    arr.push(model);
                }

                return arr;
            }
        }

        function onSelectCarousel(item) {
            // console.log('Carousel item selected:', item);
            vm.itemSelected = item;

            // unselect all carousel with id that contains string except one
            if (vm.options.unselectOthers) {
                $scope.$broadcast('a-carousel.desactivateItem', {idContains:'carousel-', except:item.carouselId})
            }
        }

        // Example add 4 elements to carousel 7
        function addItemsCarousel(total) {
            var i, model
            var oldLength = vm.carouselData7.length;
            for(i = 0; i < total; i++) {
                model = getModelImageItem(oldLength + i);
                vm.carouselData7.push(model);
            }

            // Tell carousel 6 that its array has been updated
            $scope.$broadcast('a-carousel.arrayupdated', 'carousel-7');
        }

        // Pull refresgh method for carousel 6
        function pullRefresh() {
            $timeout(function() {
                var i, model, total = 5;
                var oldLength = vm.carouselData6.length;
                for(i = 0; i < total; i++) {
                    model = getModelImageItem(oldLength + i);
                    vm.carouselData6.push(model);
                }

                $scope.$broadcast('a-carousel.arrayupdated', 'carousel-6');
                $scope.$broadcast('a-carousel.pullrefresh.done');
            }, 2500);
        }

        function getModelImageItem(id) {
            var imgId = Math.floor(Math.random() * 10000);
            return {
                id:id,
                src:'http://lorempixel.com/120/80/?' + imgId
            }
        }

    /**************************************************************************/
})
.controller('regionsCtrl', function($rootScope, $scope, $stateParams, safeApply) {//page qui permet a l'utilisateur de choisir des sports
	console.warn("je suis dans regionsCtrl");
	//déclaration des variables
	$rootScope.sport = $stateParams.sport;
	$scope.regions = [];
	
	var CND_Sport = firebase.database().ref($rootScope.sport+"/Régions");//retourne la base de données
	CND_Sport.on("value", function(snapshot){
	     	safeApply($scope, function() {
	     		$scope.regions = snapshot.val();
			});
		});		 
})
.controller('ligueDetailsCtrl', function($rootScope, $scope, $stateParams, safeApply) {
	console.warn("je suis dans ligueDetailsCtrl");
	//declaration des variables
	if($rootScope.sport == null)$rootScope.sport = $stateParams.sport;
	if($rootScope.ligue == null)$rootScope.ligue = $stateParams.ligue;
	$scope.ligueDetails = [];
	var ligueInformations = firebase.database().ref($rootScope.sport+'/Ligues/'+$rootScope.ligue);
	ligueInformations.on("value", function(snapshot){
		safeApply($scope, function() {
			$scope.ligueDetails = snapshot.val();
			console.warn("$scope.ligueDetails:",$scope.ligueDetails);
		});
	});		
})
.controller('ligueCategorieCtrl', function($rootScope, $scope, $stateParams, $state, safeApply, NgTableParams) {//page qui permet a l'utilisateur de choisir un sport
	console.warn("je suis dans ligueCategorieCtrl");
	//declaration des variables
	if($rootScope.sport == null)$rootScope.sport = $stateParams.sport;
	if($rootScope.ligue == null)$rootScope.ligue = $stateParams.ligue;
	$rootScope.categorie = $stateParams.categorie;
 	$scope.simpleList = [];
 	var self = this,
    titre = [],
    starCountRef = firebase.database().ref($rootScope.sport+'/Ligues/'+$rootScope.ligue+'/'+$rootScope.categorie);//retourne la base de données
	
	starCountRef.on("value", function(snapshot){
     	var i = 0;
     	snapshot.forEach(function(childSnapshot) {
     		console.warn("de retour");
	     	safeApply($scope, function() {
	     		if(childSnapshot.key != 0)//si les donnees ne correspondent pas aux noms des colonnes du tableau
	 			{
	 				console.warn("dans le childSnapshot");
	 				$scope.simpleList[i] = childSnapshot.val();
	     			$scope.simpleList[i].id = childSnapshot.key;
	     			i++;					
				}
				else
				{
					titre = childSnapshot.val();
					//alert(titre.length);
					var test = [];
					for(var j = 0; j < titre.length;j++)
					{
						if(j<6)test[j] = { field: j, title: titre[j], sortable: titre[j], show: true };
						else test[j] = { field: j, title: titre[j], sortable: titre[j], show: false };
					}
						self.cols = test;    
				}
	     		console.log("snapshot.val():",snapshot.val());
	     		console.log("simpleList:",$scope.simpleList);
	     		self.tableParams = new NgTableParams(
			    {
		            page: 1,            // show first page
		            total: $scope.simpleList.length, // length of data
		            count: 10,          // count per page
		            sorting: { nom: "desc" } 
			    },
			    {
			      dataset: $scope.simpleList
			    }); 
			});
		});
	 }); 
	 //donnees tableau
	self.move = move; 
    function move(column, currentIdx, value)
    {
      	var newPosition = currentIdx + value;
      	if (newPosition >= self.cols.length || newPosition < 0)  return;
      	self.cols[currentIdx] = self.cols[newPosition];
      	self.cols[newPosition] = column;
    }; 
	//redirige sur la feuille du details de la donnee selectionnee 
    $scope.details = function(id)
    {
    	//console.warn("ID:",id);
    	$rootScope.id = id;
    	/*console.warn("$rootScope.catId:",$rootScope.catId);*/
    	$state.go('app.cnd/:sport/Ligues/:ligue/:categorie/details/:id',{sport:$rootScope.sport,ligue:$rootScope.ligue,categorie:$rootScope.categorie,id:id});
	};
	//imprime la page
    $scope.cndPrint = function (div) {
    	console.log("je suis dans cndPrint");
	  	var docHead = document.head.outerHTML;
	  	var printContents = document.getElementById(div).outerHTML;
	  	var winAttr = "location=yes, statusbar=no, menubar=no, titlebar=no, toolbar=no,dependent=no, width=865, height=600, resizable=yes, screenX=200, screenY=200, personalbar=no, scrollbars=yes";
		console.warn("printContents:",printContents);
	  	var newWin = window.open("", "_blank", winAttr);
	  	var writeDoc = newWin.document;
	  	writeDoc.open();
	  	writeDoc.write('<!doctype html><html>' + docHead + '<body onLoad="window.print()">' + printContents + '</body></html>');
	  	writeDoc.close();
	  	newWin.focus();
	}
    
})
.controller('sousCtrl', function($rootScope, $scope, $stateParams, $state, safeApply, NgTableParams) {
	console.warn("je suis dans sousCtrl");
	
	//declaration des variables
	$rootScope.cont = [];	
	if($rootScope.sport == null)$rootScope.sport = $stateParams.sport;
	if($rootScope.ligue == null)$rootScope.ligue = $stateParams.ligue;
	if($rootScope.categorie == null)$rootScope.categorie = $stateParams.categorie;	
	if($rootScope.site == null)$rootScope.cont = ["ok", "c bon", "encore un autre"];	
	else $rootScope.cont = $rootScope.site;	
})
.controller('ligueCategorieAddCtrl', function($rootScope, $scope, $stateParams, $state, safeApply, NgTableParams) {
	console.warn("je suis dans ligueCategorieAddCtrl");
	//declaration des variables
	if($rootScope.id == null)$rootScope.id = $stateParams.id;
	if($rootScope.sport == null)$rootScope.sport = $stateParams.sport;
	if($rootScope.ligue == null)$rootScope.ligue = $stateParams.ligue;
	if($rootScope.categorie == null)$rootScope.categorie = $stateParams.categorie;
	var starCountRef = firebase.database().ref($rootScope.sport+'/Ligues/'+$rootScope.ligue+'/'+$rootScope.categorie);
	console.log("starCountRef:",starCountRef);
	$scope.label = [];
	starCountRef.on("value", function(snapshot){
     	snapshot.forEach(function(childSnapshot) {
 			safeApply($scope, function() {
	 			if(childSnapshot.key == 0)
	 			{
	 				$scope.label = childSnapshot.val();						     		
				}
			});
		});
	});
	console.warn("$scope.label:",$scope.label);
  	$scope.hydrate = function(data)
  	{
		//console.log("cdc:", cdc);
		$scope.data = data;
	};
	
	$scope.submitForm = function(data)
	{
		console.log("je suis dans le submit de ligueCategorieAddCtrl");
		console.log("data:",data);
		firebase.database().ref($rootScope.sport+'/Ligues/'+$rootScope.ligue+'/'+$rootScope.categorie).push().set(data, function()
		{
			$rootScope.$apply();
			$scope.$apply();
			$state.go('app.cnd/:sport/Ligues/:ligue/:categorie',{sport:$rootScope.sport,ligue:$rootScope.ligue,categorie:$rootScope.categorie});
		});
	};
})
.controller('ligueCategorieUpdateCtrl', function($rootScope, $scope, $stateParams, $state, safeApply, NgTableParams) {
	console.warn("je suis dans ligueCategorieUpdateCtrl");
	//declaration des variables
	if($rootScope.id == null)$rootScope.id = $stateParams.id;
	if($rootScope.sport == null)$rootScope.sport = $stateParams.sport;
	if($rootScope.ligue == null)$rootScope.ligue = $stateParams.ligue;
	if($rootScope.categorie == null)$rootScope.categorie = $stateParams.categorie;
	var starCountRef = firebase.database().ref($rootScope.sport+'/Ligues/'+$rootScope.ligue+'/'+$rootScope.categorie);
	console.log("starCountRef:",starCountRef);
	$scope.label = [];
	$scope.data = [];
	starCountRef.on("value", function(snapshot){
     	snapshot.forEach(function(childSnapshot) {
 			safeApply($scope, function() {
	 			if(childSnapshot.key == 0)
	 			{
	 				$scope.label = childSnapshot.val();						     		
				}
				else if(childSnapshot.key == $rootScope.id)
				{
	 				$scope.data = childSnapshot.val();	
	 				console.warn("details test "+$rootScope.id +":", $scope.data);					     		
				}
			});
		});
	});
	console.warn("$scope.label:",$scope.label);
  	$scope.hydrate = function(data)
  	{
		//console.log("cdc:", cdc);
		$scope.data = data;
	};

  	$scope.submitForm = function(data)
	{
		console.log("je suis dans le submit de ligueCategorieUpdateCtrl");
		console.log("data:",data);
		firebase.database().ref($rootScope.sport+'/Ligues/'+$rootScope.ligue+'/'+$rootScope.categorie+'/'+$rootScope.id).set(data, function()
		{
			$rootScope.$apply();
			$scope.$apply();
			$state.go('app.cnd/:sport/Ligues/:ligue/:categorie/details/:id',{sport:$rootScope.sport,ligue:$rootScope.ligue,categorie:$rootScope.categorie,id:$rootScope.id});
		});
	};
})
.controller('ligueCategorieDetailsCtrl', function($rootScope, $scope, $stateParams, $state, safeApply, NgTableParams) {
	console.warn("je suis dans ligueCategorieDetailsCtrl");
	//declaration des variables
	if($rootScope.id == null)$rootScope.id = $stateParams.id;
	if($rootScope.sport == null)$rootScope.sport = $stateParams.sport;
	if($rootScope.ligue == null)$rootScope.ligue = $stateParams.ligue;
	if($rootScope.categorie == null)$rootScope.categorie = $stateParams.categorie;
	var starCountRef = firebase.database().ref($rootScope.sport+'/Ligues/'+$rootScope.ligue+'/'+$rootScope.categorie);
	console.log("starCountRef:",starCountRef);
	$scope.label = [];
	$scope.data = [];
	starCountRef.on("value", function(snapshot){
     	snapshot.forEach(function(childSnapshot) {
 			safeApply($scope, function() {
	 			if(childSnapshot.key == 0)
	 			{
	 				$scope.label = childSnapshot.val();						     		
				}
				else if(childSnapshot.key == $rootScope.id)
				{
	 				$scope.data = childSnapshot.val();	
	 				console.warn("details test "+$rootScope.id +":", $scope.data);					     		
				}
			});
		});
	});
	console.warn("$scope.label:",$scope.label);
  	$scope.hydrate = function(data)
  	{
		//console.log("cdc:", cdc);
		$scope.data = data;
	};

})
;