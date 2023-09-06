const removeFromArray = function(array, removeThis) {
    array.splice(array.indexOf(removeThis),1);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
