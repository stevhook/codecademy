var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
    describe('.factorial', () => {
        it('should return factorial of number', () => {
            assert.equal(Calculate.factorial(5), 120);
        });
    });
});