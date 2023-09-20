const palindromes = function (string) {
    let stringArray = string
    .replace(/[!"#$%&'()*+, -./:;<=>?@[\]^_`{|}~]/g, '')
    .toLowerCase()
    .split('');


    for (i=0; i<stringArray.length/2; i++) {
        if (stringArray[i] == stringArray[stringArray.length-1-i]) {
            continue;
        } else {
            return false;
        }
    }
        return true;
};

// Do not edit below this line
module.exports = palindromes;
