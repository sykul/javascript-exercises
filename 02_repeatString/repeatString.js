const repeatString = function(string, num) {
    let output = '';
    if (num == 0) {
        return output;
    }   else if (num<0) {
        return 'ERROR';
    } else {
        for (let i = 0; i<num; i++) {
            output = `${output}${string}`;
            if (i == num-1) {
                return output;
            }
    }
}
};

// Do not edit below this line
module.exports = repeatString;
