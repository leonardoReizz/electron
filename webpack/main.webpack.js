module.exports = {
  resolve: {
    extensions: ['.ts', '.js', '.jsx']
  },

  devServer: {
    contentBase: 'app/ui/www',
    devtool: 'eval',
    hot: true,
    inline: true,
    port: 3000,
    historyApiFallback: true,
  },

  entry: './electron/main.ts',
  module: {
    rules: 
      require('./rules.webpack'),
     
    
  }
}

