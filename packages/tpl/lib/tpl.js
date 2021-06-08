const template = require('lodash.template');

const interpolate = /{([\s\S]+?)}/g;

/**
 * Template function
 * Takes strings like 'Your site is now available on {url}' and interpolates them with passed in data
 *
 * @param {String} string - string with optional {data properties}
 * @param {Object} [data] - optional data to interpolate
 * @returns
 */
module.exports = (string, data) => {
    if (!data) {
        return string;
    }

    return template(string, {interpolate})(data);
};
