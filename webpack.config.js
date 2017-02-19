var path = require('path');

module.exports = {
  entry: './app/scripts/main.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist/scripts')
  }
};
