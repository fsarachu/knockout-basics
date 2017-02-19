import Product from './models/Product.js';

console.log('Hello World!');

var products = [];

products.push(new Product({title: 'First Product', price: 12.99}));
products.push(new Product({title: 'Second Product', price: 8.50}));
products.push(new Product({title: 'Third Product', price: 1.99}));
products.push(new Product({title: 'Fourth Product', price: 5.00}));

products.forEach(function (product) {
  console.log(`${product.id}: ${product.title} - $ ${product.price}`);
});

