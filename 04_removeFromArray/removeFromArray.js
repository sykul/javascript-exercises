const removeFromArray = function(array, ...itemsToRemove) {
    array = array.filter(Number);
    for (let item in itemsToRemove) {
        if (array.includes(item)) {
            array.splice(array.indexOf(itemsToRemove[item]),1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
