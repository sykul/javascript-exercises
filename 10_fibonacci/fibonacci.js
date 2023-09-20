const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    n = 1;
    nPlusOne = 1;
    nMinusOne = 1;
    for (i=1; i<num; i++) {
        nPlusOne = nMinusOne + n;
        nMinusOne = n;
        n = nPlusOne;
    }
    return nMinusOne;
};

// Do not edit below this line
module.exports = fibonacci;
