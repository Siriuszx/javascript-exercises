const palindromes = function (str) {
    const symbols = '0123456789abcdefghijklmnopqrstuvwxyz';

    let strArr = str.split('');
    let newStrArr = [];

    strArr.forEach(el => {
        if (symbols.includes(el.toLowerCase())) newStrArr.push(el.toLowerCase());
    });

    for (let i = 0; i < newStrArr.length; i++) {
        if (newStrArr[i] !== newStrArr[newStrArr.length - i - 1]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
