angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('hortas.minhaHorta', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/minhaHorta.html',
        controller: 'minhaHortaCtrl'
      }
    }
  })

  .state('hortas.minhaHortaPublicacoes', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/minhaHortaPublicacoes.html',
        controller: 'minhaHortaPublicacoesCtrl'
      }
    }
  })

  .state('hortas.minhaHortaInformacoes', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/minhaHortaInformacoes.html',
        controller: 'minhaHortaInformacoesCtrl'
      }
    }
  })

  .state('hortas.hortaInformacoes', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hortaInformacoes.html',
        controller: 'hortaInformacoesCtrl'
      }
    }
  })

  .state('hortas.listaDeHortas', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/listaDeHortas.html',
        controller: 'listaDeHortasCtrl'
      }
    }
  })

  .state('hortas', {
    url: '/side-menu21',
    templateUrl: 'templates/hortas.html',
    controller: 'hortasCtrl'
  })

  .state('login', {
    url: '/page1',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page2',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('hortas.pedidos', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pedidos.html',
        controller: 'pedidosCtrl'
      }
    }
  })

  .state('hortas.doacoes', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/doacoes.html',
        controller: 'doacoesCtrl'
      }
    }
  })

  .state('hortas.mapa', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mapa.html',
        controller: 'mapaCtrl'
      }
    }
  })

  .state('hortas.cadastroHortas', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cadastroHortas.html',
        controller: 'cadastroHortasCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1')


});