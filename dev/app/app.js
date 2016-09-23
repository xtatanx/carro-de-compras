var css = require('../styl/main.styl');

class Cat {
  constructor() {
    this.name = 'cat';
  }

  speak() {
    console.log(this.name);
  }
}

const cat = new Cat();

cat.speak();

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