const removeFromArray = function (arr, ...els) {
    for (let i = 0; i < arr.length; i++) {
        for (let y = 0; y < els.length; y++) {
            if (arr[i] === els[y]) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

function arrayDiff(a, ...b) {
    let newArr = [];
    
    a.forEach(element => {
        if(!b.includes(element)) 
            newArr.push(element);
    }); 
    return newArr;
}