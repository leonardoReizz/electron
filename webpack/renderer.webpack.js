module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    contentBase: 'app/ui/www',
    devtool: 'eval',
    hot: true,
    inline: true,
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: 
      require('./rules.webpack'), 
    },
}