const getTheTitles = function(arr) {
    let ans = []
    for (const obj of arr) {
        ans.push(obj.title);
    }
    return ans;
};

// Do not edit below this line
module.exports = getTheTitles;
