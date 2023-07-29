const fibonacci = function (index) {
    if (Number.isInteger(+index) && +index >= 0) {
        let fib = [0, 1, 1];

        for (let i = 3; i <= index; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        return fib[index];
    } else {
        return 'OOPS'
    }
};

// Do not edit below this line
module.exports = fibonacci;
