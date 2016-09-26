import angular from 'angular';

export default class HomeController {
  /*@ngInject*/
  constructor($scope, productsFactory) {

    const DEFAULT_ORDER_PROPERTY = 'price';

    this.sortFilters = [
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

    this.filters = {
      categories: '',
      price: ''
    };

    this.status = [
      {
        id: 0,
        name: 'Available'
      },
      {
        id: 1,
        name: 'Unavailable'
      },
      {
        id: 1,
        name: 'Best match'
      }
    ];
    this.prices = [
      {
        id: 0,
        name: '$0 - $10,000'
      },
      {
        id: 1,
        name: '$11,000 - $29,000'
      },
      {
        id: 2,
        name: '$30,000+'
      }
    ];

    productsFactory.getProducts().then(response => {
      // convert this into a service to make it testable
      angular.forEach(response.data.products, (product) => {

        product.price = parseInt(product.price.split('.').join(''));
        // product.categories = product.categories.map(categoryId => {
        //   return response.data.categories.find(category => {
        //     return category.categori_id === categoryId;
        //   }).name;
        // }).join(', ');
      });

      this.products = response.data.products;
      this.categories = response.data.categories;
    });

  };

  filterProducts (id) {
    console.log(this.products, id);
  };
}
