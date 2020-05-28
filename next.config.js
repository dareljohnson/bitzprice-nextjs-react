const path = require('path')
require('dotenv').config()

module.exports = {
    env: {
        STRAPI_URL: process.env.API_URL,
        COIN_DESK: process.env.COIN_DESK
    },

    webpack: config => {
        config.resolve.alias['components'] = path.join(__dirname, 'components')

        config.resolve.alias['public'] = path.join(__dirname, 'public')

        return config
    }
}