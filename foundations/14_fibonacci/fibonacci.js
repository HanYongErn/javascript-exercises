const fibonacci = function (num) {
    let answer;
    let a = 1
    let b = 1
    if (num < 0) {
        return "OOPS";
    } else if (num == 0) {
        return 0;
    } else {
        for (let n = 1; n <= +num; n++) {
            if (n <= 2) {
                answer = a;
            } else {
                answer = a + b;
                a = b;
                b = answer;
            }
        }
        return answer;
    }
};

// Do not edit below this line
module.exports = fibonacci;
