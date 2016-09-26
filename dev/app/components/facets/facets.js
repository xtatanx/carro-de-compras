import FiltersController from './facets-controller.js'

export default {
  bindings: {
    categoryFacet: '=',
    priceFacet: '=',
    statusFacet: '=',
    filters: '=',
    filterProducts: '&'
  },
  controller: FiltersController,
  controllerAs: 'facetsCtrl',
  templateUrl: 'app/components/facets/facets.html'
}