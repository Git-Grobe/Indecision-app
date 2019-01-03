// arguments object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments); //have access to arguments
    return a + b;
};
console.log(add(55, 1, 1001));

const addArrow = (a,b) => {
    console.log(arguments); //no longer have access to arguments
    return a + b;
};
console.log(addArrow(100, 1, 1001));

// this keyword - no longer bound with arrow functions