const merge = require('webpack-merge');
const common = require('./webpackconf/common.js');
const dev = require('./webpackconf/dev.js');
const prod = require('./webpackconf/prod.js');



const mode = process.env.mode || 'production';


module.exports = merge(common, mode === 'development' ? dev : prod);