// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngSanitize'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';    }
])

.config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })
    .state('tab.contato', {
      url: '/contato',
      views: {
        'tab-contato': {
          templateUrl: 'templates/contato.html',
          controller: 'ContatoCtrl'
        }
      }
    })
    .state('tab.albuns', {
      url: '/albuns',
      views: {
        'tab-albuns': {
          templateUrl: 'templates/tab-albuns.html',
          controller: 'AlbunsCtrl'
        }
      }
    })
    .state('tab.fotos', {
      url: '/albuns/:albumId',
      views: {
        'tab-albuns': {
          templateUrl: 'templates/fotos.html',
          controller: 'FotosCtrl'
        }
      }
    })
    .state('tab.noticias', {
      url: '/noticias',
      views: {
        'tab-noticias': {
          templateUrl: 'templates/noticias.html',
          controller: 'NoticiaCtrl'
        }
      }
    })
    .state('tab.noticiaInterna', {
      url: '/noticias/:noticiaId',
      views: {
        'tab-noticias': {
          templateUrl: 'templates/noticia-interna.html',
          controller: 'NoticiaInternaCtrl'
        }
      }
    })
    .state('tab.propostas', {
      url: '/propostas',
      views: {
        'tab-propostas': {
          templateUrl: 'templates/propostas.html',
          controller: 'PropostaCtrl'
        }
      }
    })
    .state('tab.propostaInterna', {
      url: '/propostas/:propostaId',
      views: {
        'tab-propostas': {
          templateUrl: 'templates/proposta-interna.html',
          controller: 'PropostaInternaCtrl'
        }
      }
    })
    .state('tab.videos', {
      url: '/videos',
      views: {
        'tab-videos': {
          templateUrl: 'templates/videos.html',
          controller: 'VideosCtrl'
        }
      }
    })
    .state('tab.agenda', {
      url: '/agenda',
      views: {
        'tab-agenda': {
          templateUrl: 'templates/agenda.html',
          controller: 'AgendaCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});

