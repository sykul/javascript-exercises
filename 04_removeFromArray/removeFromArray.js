const removeFromArray = function(array, ...itemsToRemove) {
    itemsToRemove = itemsToRemove.filter((item) => array.includes(item));

    for (let item in itemsToRemove) {
        array.splice(array.indexOf(itemsToRemove[item]),1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;