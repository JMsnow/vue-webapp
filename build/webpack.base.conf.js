'use strict'
const utils = require('./utils')

module.exports = {
  context: utils.resolve(''),
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: utils.resolve('dist')
  }
}