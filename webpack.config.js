module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };


  const UglifyJsPlugin = require('uglifdjs-webpack-plugin');
 
module.exports = {
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
};