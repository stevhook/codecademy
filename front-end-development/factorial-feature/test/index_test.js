var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
    describe('.factorial', () => {
        it('should return factorial of number', () => {
            // Setup
            const expectedResult = 120;
            const input = 5;
            
            // Exercise
            const result = Calculate.factorial(input);
            
            //Verify
            assert.equal(result, expectedResult);
        });
    });
});