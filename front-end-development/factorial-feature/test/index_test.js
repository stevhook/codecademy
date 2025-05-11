var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
    describe('.factorial', () => {
        it('should return factorial of 5', () => {
            // Setup
            const expectedResult = 120;
            const input = 5;
            
            // Exercise
            const result = Calculate.factorial(input);
            
            //Verify
            assert.equal(result, expectedResult);
        });
        it('should return factorial of 12', () => {
            // Setup
            const expectedResult = 479001600;
            const input = 12;

            // Exercise
            const result = Calculate.factorial(input);

            //Verify
            assert.equal(result, expectedResult);
        });
        it('should return factorial of 0', () => {
            // Setup
            const expectedResult = 1;
            const input = 0;

            // Exercise
            const result = Calculate.factorial(input);

            //Verify
            assert.equal(result, expectedResult);
        });
    });
});