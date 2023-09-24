const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    people.forEach(person => {
        const age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth :  currentYear - person.yearOfBirth;
        Object.defineProperty(person, 'age', {value: age, writable: false,});
    })
    return people;
};

// Do not edit below this line
module.exports = findTheOldest;
