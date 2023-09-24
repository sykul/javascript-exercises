const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();

    people = people.map(function(person) {
        person.age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth :  currentYear - person.yearOfBirth;
        return person;
    })

    const oldest = people.sort(function(a,b){
        const previous = a.age;
        const next = b.age;
        return previous > next ? -1 : 1;
    })

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
