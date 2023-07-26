const sumAll = function(start,end) {
    if (start < 0 || end < 0){
        return 'ERROR';
    } else if (typeof start != 'number' || typeof end != 'number') {
        return 'ERROR';
    }
    
    let buffer = 0;

    if (end < start) { // Swaps the last numbers in case start is larger than end
        buffer = start;
        start = end;
        end = buffer;
        buffer = 0;
    }

    for (let i = start; i <= end; i++) {
        buffer += i;        
    }

    return buffer;
};

// Do not edit below this line
module.exports = sumAll;
