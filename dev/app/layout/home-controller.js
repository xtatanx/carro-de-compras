/*@ngInject*/
export default class HomeController {
  constructor($scope, productsFactory) {
    productsFactory.getProducts()
      .then(response => {
        this.products = response.data.products;
        this.categories = response.data.categories;
      });
  }
}