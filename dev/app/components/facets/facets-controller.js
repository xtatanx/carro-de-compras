export default class FacetsController {
  constructor() {
    // console.log(this.parent);
  }

  selectCategory(id) {
    let index = this.filters.categories.indexOf(id);

    if (typeof(this.filters.categories) === 'string') {
      this.filters.categories = [];
    }

    if (index > -1) {
      this.filters.categories.splice(index, 1);

      if (this.filters.categories.length === 0) {
        this.filters.categories = '';
      }

    } else {
      this.filters.categories.push(id);
    }
  };

  selectPrice(id) {
    let index = this.filters.price.indexOf(id);

    if (typeof(this.filters.price) === 'string') {
      this.filters.price = [];
    }

    if (index > -1) {
      this.filters.price.splice(index, 1);

      if (this.filters.price.length === 0) {
        this.filters.price = '';
      }

    } else {
      this.filters.price.push(id);
    }
  }
}