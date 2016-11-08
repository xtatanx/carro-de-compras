import angular from 'angular';

export default () => {
  return (items, comparatorObj) => {

    let existInArray = (arr, value) => {
      return arr.some(item => item === value);
    }

    return items.filter(item => {

      let isInCategory = false;

      if (comparatorObj.categories === '') {
        return item;
      }

      angular.forEach(comparatorObj.categories, categoryId => {
        if (existInArray(item.categories, categoryId) && isInCategory === false) {
          isInCategory = true;
        };
      });


      if (isInCategory) {
        return item;
      }

    }).filter(item => {
      let isInPriceRange;

      if (comparatorObj.price === '') {
        return item;
      }

      isInPriceRange = comparatorObj.price.some(priceId => {

        if (priceId === 0) {
          if (item.price > 0 && item.price <= 10000) {
            return true;
          }
        } else if (priceId === 1) {
          if (item.price > 10000 && item.price < 30000) {
            return true;
          }
        } else {
          if (item.price >= 30000) {
            return true;
          }
        }

        return false;
      });

      if (isInPriceRange) {
        return item;
      }

    }).filter(item => {
      // debugger;
      if (comparatorObj.status === '') {
        return item;
      }

      if (comparatorObj.status === 'bestseller') {
        if (item.best_seller) {
          return item
        }
      } else if (comparatorObj.status === 'available') {
        if (item.available) {
          return item;
        }
      } else if (comparatorObj.status === 'unavailable'){
        if (!item.available) {
          return item;
        }
      }
    });
  }
}