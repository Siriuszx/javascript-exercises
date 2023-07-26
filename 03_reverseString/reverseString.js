const reverseString = function(str) {
    let buffer = '';

    for (let i = str.length - 1; i >= 0; i--) {
        buffer += str[i];        
    }
    return buffer;
};

// Do not edit below this line
module.exports = reverseString;
