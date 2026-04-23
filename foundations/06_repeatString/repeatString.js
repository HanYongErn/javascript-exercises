const repeatString = function repeatString(string, number){
    if (number > 0) {
        /*const final = string.repeat(number);
        return final;*/
        let result = "";
        let i = 0;
        while (i<number) {
            result += string;
            i++;
        }
        return result;
    } else if (number < 0) {
        return "ERROR";
    } else {
        return "";
    }
}

// Do not edit below this line
module.exports = repeatString;
