starter.config(['$translateProvider', function ($translateProvider) {
$translateProvider.translations('fr', {
//visiteur
'ajouterVisiteur': 'Ajouter/modifier Visiteur',
'listeVisiteur': 'Liste des Visiteurs',
'labelVisiteur': 'Visiteur',
//Globale
'labelNom': 'Nom',
'labelPrenom': 'Prénom',
'labelTel': 'Téléphone',
'labelAdresse': 'Adresse',
'labelMail': 'Mail',
'labelObjet': 'Objet',
'labelBut': 'Détail de l\'objet',
'labelDate':'Date',
'labelPwd': 'Mot de passe',
'boutonSave': 'enregistrer',
'boutonAdd' : 'enregistrer',
'boutonEnreg': 'sauvegarder',
'boutonDel' : 'effacer',
'boutonErase' : 'Suprimer',
'boutonSite':'Démarrez',
'boutonUpdate' : 'modifier',
'boutonStat' : 'statistiques',
'boutonRetour':'retour',
'voirDetails':'voir détails',
//menu
'home': 'Accueil',
'sectionClient': 'Client',
'sectionGeneralite': 'Généralité',
'sectionContenu': 'Contenu',
'sectionPage': 'Page',
'sectionCatalogue':'Catalogue',
'sectionAdmin': 'Admin',
'lineStatu' : 'En ligne',
'userIcon' : 'S\'enregistrer',
'userLogin' : 'Connexion',
'userLogout' : 'Déconnexion',
'listMenu': 'Liste',
'addMenu': 'ajouter',
'erreurNull': 'entrez une valeur',
'erreurMin': 'trop court',
'erreurMax': 'trop long',
'erreurMail': 'adresse mail invalide',
'erreurNombre': 'caratères alphabétiques non autorisés',

//page client
'info': 'Informations client',
'boutonClient' : 'ajouter client',
'boutonNew': 'nouvel utilisateur',

//page joueurs
'infoJoueur':'Informations joueur',
'labelPoste':'Poste',
'labelTaille':'Taille',
'labelPhoto':'Photo',
'choixClub':'choisir club',
'choixEquipe':'Choisir équipe',
'choixJoueur':'Choisir joueur',
'addJoueurs':'ajouter joueur',
'choixClubJoueur':'Choisir Club et équipe',

//page club
"infoClub":"Information club",

//page match
"infoMatch":"Informations du match",
'labelHeurDeb':'Heure de début',
'labelHeurFin':'Heure de fin',
'labelLieu':'Lieu',
'labelNomEquipe1':'Nom de l\'équipe 1',
'labelNomEquipe2':'Nom de l\'équipe 2',
'labelNomCoach1':'Nom du Coach1',
'labelNomCoach2':'Nom du Coach2',

//page généralité
'labelInfo': 'Informations générales',
'labelEntete': 'Entête',
'labelSite': 'Nom du site',
'labelLogo': 'Logo',
'bouttonUpload': 'importer (upload)',
'labelFooter': 'pied de page',
'labelMention': 'Mentions légales',
'boutonGen' : 'ajouter généralité',


//page contenu
'labelContenu': 'Contenus',
'titreContenu': 'Titre du contenu',
'descContenu': 'Description du contenu',
'boutonContenu' : 'ajouter contenu',

//page page
'titrePage': 'Titre de la page',
'labelImage': 'Image',
'labelDescription': 'Description',
'boutonPage' : 'ajouter page',
'boutonCreate': 'générez',

//page visiteur
'labelService':'Service',
'labelVisiteur':'Visiteur',
'labelApercu':'Aperçu',
'titleSearch':'Recherches avancées',

//page cahier des charges
'5_conseils_cree_app': '5 conseils pour créer votre application mobile !',
'1_definir_objectifs_concept': ' Définissez vos objectifs, votre concept',
'introduction_1': ' Avant de vous lancer dans la rédaction d’un cahier des charges ou à la recherche d’un partenaire pour développer votre application, vous devez commencer par poser les bases ! Posez-vous tout d’abord plusieurs questions pour définir votre concept :',
'conseils_cdc_agile': 'Conseils : Comment définir un cahier des charges agile ?',
'pourquoi_dev_app': 'Pourquoi développer mon application mobile?',
'valeur_ajoute': 'Quelle sera sa valeur ajoutée?',
'quelle_cible_besoins': 'Quels sont ma cible et leurs besoins ?',
'fct_priorite': 'Quelles fonctions développer en priorité?',
'delai' : 'Quel est le délai ?',
'budget': 'Quel budget ?',
'budget_suff': 'Est-il suffisant pour développer une application ?',
'budget_recru': 'Faut-il recruter pour assurer la gestion de l’application ?',
'strat_av': 'Quelle stratégie de communication adopter avant lancement ?',
'strat_ap': 'Quelle stratégie de communication adopter après lancement ?',
'action_fidel': 'Quelles actions pour acquérir et fidéliser nos clients ?',
'1_rediger_cdc': 'Rédiger mon cahier des charges agile',
'introduction_2': 'us souhaitez vous lancer dans la création de votre site internet ? Fini les cahiers des charges imposants, visant un développement sur du long terme ! Le marché évolue beaucoup trop vite et souvent votre business se développe différemment de ce que vous aviez prévu, pensez donc « Agilité » !<br>Pour évoluer de pair avec votre marché, votre devez adapter votre cahier des charges et le rendre plus souple en rédigeant des documents courts avec des développements courts termes.',
'budget': 'Comment définir un cahier des charges agile ?',
'quel_utilisateur': 'Qui sont mes utilisateurs ?',
'quel_besoin': 'Quels sont leur besoin ?',
'comment_nav_site': 'Comment navigue-t-il sur votre site ?',
'comment_nav_app': 'Comment navigue-t-il sur votre application ?',
'fonctionnalite_': '',

});

$translateProvider.translations('en', {
//visiteur
'ajouterVisiteur': 'Add/update Visitor',
'listeVisiteur': 'Visitors list',
'labelVisiteur': 'Visiteur',
//Globale
'labelObjet': 'Object',
'labelBut': 'Details',
'boutonSave': 'save',
'boutonAdd' : 'save',
'boutonEnreg': 'save',
'boutonDel' : 'delete',
'boutonSite':'Start',
'boutonUpdate' : 'update',
'boutonStat' : 'statistics',
'boutonRetour':'back',	
'voirDetails':'show details',

//menu
'home': 'Home',
'sectionClient': 'Client',
'sectionGeneralite': 'Généralité',
'sectionContenu': 'Contenu',
'sectionPage': 'Page',
'sectionCatalogue':'Catalogue',
'sectionAdmin': 'Admin',
'lineStatu' : 'Online',
'userIcon' : 'Sign Up',
'userLogin' : 'Login',
'userLogout' : 'Logout',
'listMenu': 'List',
'addMenu': 'Add',
'erreurNull': 'You did not enter a field',
'erreurMin': 'Your field is too short',
'erreurMax': 'Your field is too long',
'erreurMail': 'adresse mail invalide:Invalid email address',
'erreurNombre': 'caratères alphabétiques non autorisés:Unauthorized alphabetic characters',

//page client
'info': 'Informations client',
'labelNom': 'Last name',
'labelPrenom': 'First name',
'labelTel': 'Phone',
'labelAdresse': 'Address',
'labelMail': 'Mail',
'labelPwd': 'Password',
'boutonNew': 'new user',
'boutonClient' : 'add client',

//page généralité
'labelInfo': 'Informations générales',
'labelEntete': 'Header',
'labelSite': 'Site title',
'labelLogo': 'Logo',
'bouttonUpload': 'upload',
'labelFooter': 'Footer',
'labelMention': 'Mentions légales',
'boutonGen' : 'add généralité',

//page contenu
'labelContenu': 'Contenus',
'titreContenu': 'Content\'s title',
'descContenu': 'Content\'s description',
'boutonAdd' : 'ennregistrer contenu',
'boutonContenu' : 'add content\'s',

//page page
'titrePage': 'Page title',
'labelImage': 'Picture',
'labelDescription': 'Description',
'boutonPage' : 'add page',
'boutonCreate': 'Create'

});

$translateProvider.translations('cr', {
//Globale
'boutonSave': 'enrejistré\'y',
'boutonAdd' : 'enrejistré\'y',
'boutonEnreg': 'enrejistré\'y',
'boutonDel' : 'enrejistré\'y',
'boutonSite':'komensé',
'boutonUpdate' : 'modifié\'y',
'boutonRetour':'déviré',		

//menu
'home': '',
'sectionClient': '',
'sectionGeneralite': '',
'sectionContenu': '',
'sectionPage': '',
'sectionCatalogue':'Catalogue',
'sectionAdmin': 'Admin',
'lineStatu' : '',
'userIcon' : '',
'userLogin' : '',
'listMenu': '',
'addMenu': '',
'erreurNull': '',
'erreurMin': '',
'erreurMax': '',
'erreurMail': '',
'erreurNombre': '',

//page client
'info': '',
'labelNom': '',
'labelPrenom': '',
'labelTel': '',
'labelAdresse': '',
'labelMail': '',
'labelPwd': '',
'boutonNew': '',
'boutonClient' : '',

//page généralité
'labelInfo': '',
'labelEntete': '',
'labelSite': '',
'labelLogo': '',
'bouttonUpload': '',
'labelFooter': '',
'labelMention': '',
'boutonGen' : '',


//page contenu
'labelContenu': '',
'titreContenu': '',
'descContenu': '',


//page page
'titrePage': '',
'labelImage': '',
'labelDescription': '',
'boutonPage' : '',
'boutonCreate': ''

}); 
$translateProvider.translations('es', {
//Globale
'boutonSave': '',
'boutonAdd' : '',
'boutonEnreg': '',
'boutonDel' : '',
'boutonSite':'',
'boutonUpdate' : '',
'boutonRetour':'',		

//menu
'home': '',
'sectionClient': '',
'sectionGeneralite': '',
'sectionContenu': '',
'sectionPage': '',
'sectionCatalogue':'Catalogue',
'sectionAdmin': 'Admin',
'lineStatu' : '',
'userIcon' : '',
'userLogin' : '',
'listMenu': '',
'addMenu': '',
'erreurNull': '',
'erreurMin': '',
'erreurMax': '',
'erreurMail': '',
'erreurNombre': '',

//page client
'info': '',
'labelNom': '',
'labelPrenom': '',
'labelTel': '',
'labelAdresse': '',
'labelMail': '',
'labelPwd': '',
'boutonNew': '',
'boutonClient' : '',

//page généralité
'labelInfo': '',
'labelEntete': '',
'labelSite': '',
'labelLogo': '',
'bouttonUpload': '',
'labelFooter': '',
'labelMention': '',
'boutonGen' : '',

//page contenu
'labelContenu': '',
'titreContenu': '',
'descContenu': '',


//page page
'titrePage': '',
'labelImage': '',
'labelDescription': '',
'boutonPage' : '',
'boutonCreate': ''
}); 

$translateProvider.preferredLanguage('fr');
}]);