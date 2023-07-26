const repeatString = function(str, count) {
    if(count < 0) {
        return 'ERROR';
    }
    
    let buffer = '';

    for (let i = 0; i < count; i++) {
        buffer += str;
    }
    return buffer;
};

// Do not edit below this line
module.exports = repeatString;
