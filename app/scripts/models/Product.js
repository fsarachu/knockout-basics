var id = 1;

var Product = function (data) {
  this.id = id++;
  this.title = ko.observable(data.title || '');
  this.brand = ko.observable(data.brand || '');
  this.price = ko.observable(data.price || 0);
  this.discount = ko.observable(data.discount || 0);
  this.image = ko.observable(data.image || '');
};

export default Product;
