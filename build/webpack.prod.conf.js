'use strict'
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.conf')

module.exports = merge(webpackBaseConfig, {
  mode: 'production'
})
