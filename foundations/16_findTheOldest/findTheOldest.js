const findTheOldest = function(arr) {
    const oldest = arr.sort(function(a, b) {
        let ageA;
        let ageB;
        if ("yearOfDeath" in a == false) {
            let today = new Date();
            today = today.getFullYear();
            ageA = today - a.yearOfBirth;
        } else {
            ageA = a.yearOfDeath - a.yearOfBirth;
        }
        if ("yearOfDeath" in b == false) {
            let today = new Date();
            today = today.getFullYear();
            ageB = today - b.yearOfBirth;
        } else {
            ageB = b.yearOfDeath - b.yearOfBirth;
        }

        return ageA > ageB ? -1 : 1;
    })
    return arr[0];
    
}

// Do not edit below this line
module.exports = findTheOldest;
