const removeFromArray = function removeFromArray(arr, ...arg) {
    let result = [];
    arr.forEach((num) => {
        if(arg.indexOf(num) == -1) {
            result.push(num);
        }
    })
    console.log(result);
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
