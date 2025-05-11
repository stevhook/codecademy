const Calculate = {
    factorial(input) {
        let factorialResult = 1;
        for (let i = input; i >= 1; i--) {
            factorialResult = factorialResult * i;
        };
        return factorialResult;
    }
}

module.exports = Calculate;


