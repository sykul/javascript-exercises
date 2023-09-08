const sumAll = function(first, last) {
    if (first > last) {
        [first, last] = [last, first];
    }

    if (first < 0 || last < 0 || !Number.isInteger(first) || !Number.isInteger(last)) {
        return 'ERROR';
    }

    let runningTotal = 0;
    while (first <= last) {
        runningTotal += first;
        first++;
    }
    
    return runningTotal;
};

// Do not edit below this line
module.exports = sumAll;
