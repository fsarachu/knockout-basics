var id = 0;

var Product = function (data) {
  this.id = id++;
  this.title = data.title || '';
  this.brand = data.brand || '';
  this.price = data.price || 0;
  this.discount = data.discount || 0;
}

export default Product;
