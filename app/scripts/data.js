import Product from './models/Product.js';

var sampleData = {};

sampleData.products = [];

sampleData.products.push(new Product({
  title: 'Aviator Classic Gold Sunglasses',
  brand: 'Ray-Ban',
  actualPrice: 161.06,
  discount: 40,
  image: 'images/aviator_classic_gold_sunglasses.jpg'
}));

sampleData.products.push(new Product({
  title: 'Cable Minna Beanie',
  brand: 'The North Face',
  actualPrice: 5.99,
  image: 'images/cable_minna_beanie.jpg'
}));

sampleData.products.push(new Product({
  title: 'Preston Flap Wallet',
  brand: 'Fossil',
  actualPrice: 10.00,
  discount: 0,
  image: 'images/preston_flap_wallet.jpg'
}));

sampleData.products.push(new Product({
  title: 'Floral Perforated Belt',
  brand: 'Fossil',
  actualPrice: 7.90,
  discount: 0,
  image: 'images/floral_perforated_belt.jpg'
}));

sampleData.products.push(new Product({
  title: 'Fuzzy Earflap Tibetan Beanie',
  brand: 'The North Face',
  actualPrice: 5.00,
  discount: 0,
  image: 'images/fuzzy_earflap_tibetan_beanie.jpg'
}));

sampleData.products.push(new Product({
  title: 'Junior\'s Cowgirl Hat',
  brand: 'Roxy',
  actualPrice: 8.99,
  discount: 0,
  image: 'images/junior\'s_cowgirl_hat.jpg'
}));

sampleData.products.push(new Product({
  title: 'Reversible Belt',
  brand: 'Calvin Klein',
  actualPrice: 30.00,
  discount: 25,
  image: 'images/reversible_belt.jpg'
}));

sampleData.products.push(new Product({
  title: 'Sun Child Wallet',
  brand: 'Roxy',
  actualPrice: 8.50,
  discount: 0,
  image: 'images/sun_child_wallet.jpg'
}));


export default sampleData;
