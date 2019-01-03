"use strict";

var _arguments = arguments;
// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    console.log(arguments); //have access to arguments
    return a + b;
};
console.log(add(55, 1, 1001));

var addArrow = function addArrow(a, b) {
    console.log(_arguments); //no longer have access to arguments
    return a + b;
};
console.log(addArrow(100, 1, 1001));

// this keyword - no longer bound with arrow functions
