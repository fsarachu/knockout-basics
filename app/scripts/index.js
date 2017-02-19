import sampleData from './data.js';

sampleData.products.forEach(function (product) {
  console.log(`${product.id}: ${product.title} - $ ${product.price}`);
});
