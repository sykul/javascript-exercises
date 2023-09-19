const palindromes = function (string) {
    let stringArray = string.split('');

    for (i=0; i<stringArray.length/2; i++) {
        if (stringArray[i] == stringArray[stringArray.length-1-i]) {
            continue;
        } else {
            return "no";
        }
    }
        return true;
};

// Do not edit below this line
module.exports = palindromes;
