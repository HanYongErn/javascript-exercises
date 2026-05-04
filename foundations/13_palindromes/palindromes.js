function onlyLetters(str) {
    let final = "";
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if (code < 48 || (code > 57 && code < 65) || (code > 90 && code < 97) || code > 122){
            continue;
        } else final += str[i];
        //if ((code > 64 && code < 91) || (code > 96 && code < 123) || 
            //(str[i] >= 0 && str[i] <= 9) || str[i] !== ' ') {
            //final += str[i];
        //}
    }
    return final.toLowerCase();
}

function backwards(str) {
    let backwards = "";
    for (i = str.length - 1; i >= 0; i--) {
        backwards += str[i];
    }
    return backwards;
}

const palindromes = function (str) {
    const changed = onlyLetters(str);
    if (changed === backwards(changed)) {
        return true;
    } else return false;
};

// Do not edit below this line
module.exports = palindromes;
