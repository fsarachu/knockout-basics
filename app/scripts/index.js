import sampleData from './data.js';

var app = {};

app.metadata = {
  pageTitle: 'Products'
};

app.products = sampleData.products;

ko.applyBindings(app);
