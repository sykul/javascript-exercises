const reverseString = function(string) {
    splitArray = string.split('');
    reversedArray = splitArray.reverse();
    stringFromArray = reversedArray.join('');
    return stringFromArray;
};

// Do not edit below this line
module.exports = reverseString;
