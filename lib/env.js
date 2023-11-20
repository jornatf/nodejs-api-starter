require('dotenv').config();

/**
 * Set default Port if .env var "PORT" doesn't exist.
 */
exports.defaultPort = 8000;

/**
 * Check if env is like I want (dev, prod etc).
 * @param {String} env 
 * @returns Boolean
 */
exports.is = function (env = 'dev') {
    return process.env.API_ENV === env;
}