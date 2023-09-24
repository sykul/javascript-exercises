const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    people.forEach(person => {
        const age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth :  currentYear - person.yearOfBirth;
        console.log(`${person.name}: ${age}`);
    })
};

// Do not edit below this line
module.exports = findTheOldest;
