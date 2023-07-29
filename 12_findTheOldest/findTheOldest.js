const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    }];

const findTheOldest = function (peopleArr) {
    const oldest = peopleArr.reduce((obj, item) => {
        if(!('yearOfBirth' in obj)) return item;
        if(calcAge(obj) < calcAge(item)) return item
        return obj;
    }, {});
    return oldest;
};

// const findTheOldest = function (peopleArr) {
//     peopleArr.reduce((oldest, person) => {
//         if (!oldest.yearOfBirth) return person
//         if (calcAge(oldest) < calcAge(person)) return person;
//     }, {});

// };

/*
Go through array and find the oldest person
    Calculate the age of the person
        IF dead dateOfDeath - dateOfBirth
        IF alive curDate - dateOfBirth
    Compare it to the oldest person you have
    IF oldestPerson.age < person.age
        oldestPerson = person;
*/
function calcAge(person) {
    return person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : 2023 - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
