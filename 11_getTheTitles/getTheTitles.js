const getTheTitles = function(...books) {
    let array2 = [];
    for (book in books) {
        array2.push(books.find((element) => `${book}`));
    }
    return array2;
};

// Do not edit below this line
module.exports = getTheTitles;
