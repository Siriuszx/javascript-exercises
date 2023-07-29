const getTheTitles = function(objArr) {
    let temp = [];
    
    objArr.forEach(obj => {
        if('title' in obj) temp.push(obj['title']);
    });
    return temp;
};

// Do not edit below this line
module.exports = getTheTitles;
