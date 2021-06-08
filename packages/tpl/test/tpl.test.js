// Switch these lines once there are useful utils
// const testUtils = require('./utils');
require('./utils');
const tpl = require('../');

describe('tpl', function () {
    it('Can handle a plain string', function () {
        const string = 'My template';
        const result = tpl(string);

        result.should.eql('My template');
    });

    it('Can handle a string with data', function () {
        const string = 'Go visit {url}';
        const data = {url: 'https://example.com'};

        let result = tpl(string, data);

        result.should.eql('Go visit https://example.com');
    });
});
