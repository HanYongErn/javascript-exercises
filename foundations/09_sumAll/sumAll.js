const sumAll = function sumAll(a, b) {
    //check non-integer or negative numbers
    if (Number.isInteger(a) !== true || Number.isInteger(b) !== true || 
        a < 0 || b < 0) {
        return "ERROR";
    } else if(a > b) {
        // make sure a smaller than b
        let change;
        change = b;
        b = a;
        a = change;
    }

    let sum = 0;
    for(let i = a; i <= b; i++) {
        sum += i;
    }
    console.log(sum);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
