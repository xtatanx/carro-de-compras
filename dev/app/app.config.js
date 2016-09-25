import homeController from './layout/home-controller.js';

/*@ngInject*/
export default ($routeProvider, $locationProvider) => {

  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');

  $routeProvider
    .when('/', {
      templateUrl: 'app/layout/home.html',
      controller: homeController,
      controllerAs: 'homeCtrl'
    })
    .otherwise('/');
}