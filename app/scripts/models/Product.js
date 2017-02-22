var id = 1;

var Product = function (data) {
  this.id = id++;
  this.title = ko.observable(data.title || '');
  this.brand = ko.observable(data.brand || '');
  this.price = ko.observable(data.price || 0);
  this.discount = ko.observable(data.discount || 0);
  this.image = ko.observable(data.image || '');
  this.salePrice = ko.computed(function () {
    return this.discount() ? this.price() * (this.discount() / 100) : this.price();
  }, this);
};

export default Product;
