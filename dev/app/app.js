import '../styl/main.styl';
import angular from 'angular';
import angularroute from 'angular-route';
import appConfig from './app.config.js';
import envConstants from './constants/app-environments.js';
import productsFactory from './services/products.js';

/*@ngInject*/
let mainCtrl = $scope => {
  $scope.hello = 'world';
}

angular.module('app', ['ngRoute'])
  .factory('productsFactory', productsFactory)
  .constant('envConfig', envConstants)
  .config(appConfig);


// dev workflow
// clean public folder
// copy static assets (index.html, img folder) in public
// use dummy endpoint
// run webpack dev server running js and css hot reload module

// prod workflow
// clean public folder
// copy static assets (index.html, img folder) in public
// use prod endpoint
// run webpakc to generate bundle files