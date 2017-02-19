var path = require('path');

module.exports = {
  entry: './app/scripts/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist/scripts')
  },
  module : {
    loaders: [ {
      test   : path.resolve(__dirname, 'app/scripts'),
      loader : 'babel-loader'
    }
    ]
  }
};
