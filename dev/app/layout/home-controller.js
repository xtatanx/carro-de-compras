import angular from 'angular';

/*@ngInject*/
export default class HomeController {
  constructor($scope, productsFactory) {

    var DEFAULT_ORDER_PROPERTY = 'price';

    productsFactory.getProducts()
      .then(response => {

        // convert this into a service to make it testable
        angular.forEach(response.data.products, (product) => {
          product.price = parseInt(product.price.split('.').join(''));
        });

        this.filters = [
          {
            name: 'Name',
            orderBy: 'name'
          },
          {
            name: 'Price: low to high',
            orderBy: `+${DEFAULT_ORDER_PROPERTY}`
          },
          {
            name: 'Price: high to low',
            orderBy: `-${DEFAULT_ORDER_PROPERTY}`
          }
        ];
        this.products = response.data.products;
        this.categories = response.data.categories;
        this.orderProperty = this.filters[2].orderBy;
      });
  }
}