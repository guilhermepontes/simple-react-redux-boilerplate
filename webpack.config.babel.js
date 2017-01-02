import path    from 'path'
import webpack from 'webpack'
import csslint from 'stylelint-webpack-plugin'
import pimport from 'postcss-import'

const isProd = (process.env.NODE_ENV === 'production');
const base = path.resolve(__dirname, './application')

const webpackConfig = {
  context: base,

  entry: './index.js',

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'application.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loaders: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      },

      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader?sourceMap'
        ],
        exclude: /node_modules/
      }
    ]
  },

  devtool: isProd? 'cheap-module-source-map' : 'cheap-module-eval-source-map',

  devServer: {
    historyApiFallback: !isProd
  },

  plugins: isProd ? [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [
    new csslint({
      configFile: '.stylelintrc',
      context: base + '/stylesheets',
      files: '**/*.scss',
      failOnError: false,
      quiet: true
    })
  ],

  postcss: () => [pimport]
}

export default webpackConfig