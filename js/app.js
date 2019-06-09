// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic','ionic-sidemenu', 'starter.controllers'])

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

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.doaharian', {
      url: '/doaharian',
      views: {
        'menuContent': {
          templateUrl: 'templates/doaharian.html',
          controller: 'DoaharianCtrl'
        }
      }
    })

  .state('app.doapuasa', {
    url: '/doapuasa',
    views: {
      'menuContent': {
        templateUrl: 'templates/doa-puasa.html',
          controller: 'DoaPuasaCtrl'
      }
    }
  })

  .state('app.doatarawih', {
    url: '/doatarawih',
    views: {
      'menuContent': {
        templateUrl: 'templates/doatarawih.html',
          controller: 'DoatarawihCtrl'
      }
    }
  })

  .state('app.doabilal', {
    url: '/doabilal',
    views: {
      'menuContent': {
        templateUrl: 'templates/bilaltarawih.html',
          controller: 'DoabilalCtrl'
      }
    }
  })

  .state('app.doawitir', {
    url: '/doawitir',
    views: {
      'menuContent': {
        templateUrl: 'templates/doawitir.html',
          controller: 'DoawitirCtrl'
      }
    }
  })

.state('app.doatahajud', {
    url: '/doatahajud',
    views: {
      'menuContent': {
        templateUrl: 'templates/doatahajud.html',
          controller: 'DoatahajudCtrl'
      }
    }
  })

.state('app.doaduha', {
    url: '/doaduha',
    views: {
      'menuContent': {
        templateUrl: 'templates/doaduha.html',
          controller: 'DoaduhaCtrl'
      }
    }
  })

.state('app.doahajat', {
    url: '/doahajat',
    views: {
      'menuContent': {
        templateUrl: 'templates/doahajat.html',
          controller: 'DoahajatCtrl'
      }
    }
  })

.state('app.doaqunut', {
    url: '/doaqunut',
    views: {
      'menuContent': {
        templateUrl: 'templates/doaqunut.html',
          controller: 'DoaqunutCtrl'
      }
    }
  })

.state('app.doalailatulqodar', {
    url: '/doalailatulqodar',
    views: {
      'menuContent': {
        templateUrl: 'templates/doalailatulqodar.html',
          controller: 'DoalailatulqodarCtrl'
      }
    }
  })

.state('app.cover', {
    url: '/cover',
    views: {
      'menuContent': {
        templateUrl: 'templates/cover.html',
          controller: 'CoverCtrl'
      }
    }
  })
.state('app.info', {
    url: '/info',
    views: {
      'menuContent': {
        templateUrl: 'templates/info-app.html',
          controller: 'InfoCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/cover');
});
