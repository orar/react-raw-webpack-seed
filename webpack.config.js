
const productionConfig = require('./config/webpack.prod.config.js');
const developmentConfig = require('./config/webpack.dev.config.js');

const isProduction = process.env.npm_lifecycle_event === "production";

if (isProduction) {
  module.exports = productionConfig;
} else {
  module.exports = developmentConfig;
}
