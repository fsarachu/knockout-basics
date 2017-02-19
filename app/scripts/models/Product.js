var id = 1;

var Product = function (data) {
  this.id = id++;
  this.title = data.title || '';
  this.brand = data.brand || '';
  this.price = data.price || 0;
  this.discount = data.discount || 0;
  console.log(`Crafted product Nº:${this.id}`);
};

export default Product;
