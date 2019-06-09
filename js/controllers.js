angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

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
  $scope.login = function() {
    $scope.modal.show();
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

.controller('DoaharianCtrl', function($scope) { 
  })
  .controller('DoaPuasaCtrl', function($scope) { 
  })
  .controller('DoatarawihCtrl', function($scope) { 
  })
  .controller('DoawitirCtrl', function($scope) { 
  })
  .controller('DoatahajudCtrl', function($scope) { 
  })
  .controller('DoaduhaCtrl', function($scope) { 
  })
  .controller('DoahajatCtrl', function($scope) { 
  })
  .controller('CoverCtrl', function($scope) { 
  })
  .controller('DoabilalCtrl', function($scope) { 
  })
  .controller('DoaqunutCtrl', function($scope) { 
  })
  .controller('DoalailatulqodarCtrl', function($scope) { 
  })
  .controller('InfoCtrl', function($scope) { 
  })
  
.controller('MyController', function($scope){
$scope.items =
    [{
      id: 1,
      name: 'Doa Harian Ramadhan',
      icon: "ion-map",
      state: '#/app/doaharian',
      footer: 'Doa harian'
      
    }, {
      id: 2,
      name: "Ucapan Salam",
      icon: "ion-paper-airplane",
      state: '#/app/doapuasa',
      footer: 'Niat dan Berbuka'
      
    }, {
      id: 3,
      name: "Bacaan Hadharat",
      icon: "ion-connection-bars",
      state: '#/app/doatarawih',
      footer: 'Shalat Tarawih'

    },{
      id: 4,
      name: "Surat Mu'awazatain",
      icon: "ion-mic-a",
      state: '#/app/doabilal',
      footer: 'Bilal Tarawih'

    },{
      id: 5,
      name: "Doa Sahalat Witir",
      icon: "ion-university",
      state: '#/app/doawitir',
      footer: 'Shalat Witir'
      

    },{
      id: 6,
      name: "Doa Sahalat Tahajud",
      icon: "ion-trophy",
      state: '#/app/doatahajud',
      footer: 'Shalat Tahajud'
      
    }, {
      id: 7,
      name: "Doa Sahalat Duha",
      icon: "ion-cash",
      state: '#/app/doaduha',
      footer: 'Shalat Duha'
      
    },{
      id: 8,
      name: "Doa Sahalat hajat",
      icon: "ion-umbrella",
      state: '#/app/doahajat',
      footer: 'Shalat hajat'
      
    },{
      id: 9,
      name: "Doa Qunut",
      icon: "ion-ribbon-b",
      state: '#/app/doaqunut',
      footer: 'Doa Qunut'
      
    },{
      id: 10,
      name: "Doa Lailatul Qodar",
      icon: "ion-planet",
      state: '#/app/doalailatulqodar',
      footer: 'Doa Lailatul Qodar'
      
    }

    ];

})



.controller('SideMenuCtrl', function($scope) {
  $scope.theme = 'ionic-sidemenu-red';
  $scope.tree =
    [{
      
      id: 1,
      name: "Ucapan Salam",
      icon: "ion-paper-airplane",
      level: 0,
      state: 'app.doapuasa'
    }, {
      id: 2,
      name: "Bacaan Hadharat",
      icon: "ion-connection-bars",
      level: 0,
      state: 'app.doatarawih'
    },{
      id: 3,
      name: "Surat Yasin",
      icon: "ion-mic-a",
      level: 0,
      state: 'app.doabilal'
    },{
      id: 4,
      name: "Surat Mu'awazatain",
      icon: "ion-university",
      level: 0,
      state: 'app.doawitir'

    },{
      id: 5,
      name: "Ayat 15",
      icon: "ion-trophy",
      level: 0,
      state: 'app.doatahajud'
    }, {
      id: 6,
      name: "Bacaan Tahlil",
      icon: "ion-cash",
      level: 0,
      state: 'app.doaduha'
    },{
      id: 7,
      name: "Doa Penutup",
      icon: "ion-umbrella",
      level: 0,
      state: 'app.doahajat'
    },{
      id: 8,
      name: "Info Aplikasi",
      icon: "ion-speakerphone",
      level: 0,
      state: 'app.info'
    }  

    ];
});