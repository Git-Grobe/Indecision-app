'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    console.log(arguments); //have access to arguments
    return a + b;
};
console.log(add(55, 1, 1001));

var addArrow = function addArrow(a, b) {
    // console.log(arguments); //no longer have access to arguments
    return a + b;
};
console.log(addArrow(100, 1, 1001));

// this keyword - no longer bound


//es5

// const user = {
//     name: 'Scott',
//     cities: ['Durham', 'Philadelphia', 'Raleigh'],
//     printPlacesLived: function () {
//         console.log(this.name);
//         console.log(this.cities);

//         const that = this;

//         this.cities.forEach(function (city) {
//             console.log(that.name + ' has lived in ' + city);
//         });
//     }
// };

// user.printPlacesLived();


//arrow function uses parents this value
var user = {
    name: 'Scott',
    cities: ['Durham', 'Philadelphia', 'Raleigh'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has loved in ' + city;
        });
    }
};

console.log(user.printPlacesLived());

// Challenge 
// numbers - array of numbers
// multiplyBy - single number
// multiply - return a new array where the numbers have been multiplied

var multiplier = {
    numbers: [2, 4, 6],
    multiplyBy: 10,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
