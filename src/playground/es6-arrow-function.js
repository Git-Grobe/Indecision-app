//ES5 functions
const square = function (x) {
    return x * x;
};

//ES5 named function
function square2(x) {
    return x * x;
}






//ES6 functions
const squareArrow = (x) => {
    return x * x;
};

//concise ES6 expression syntax, implicitly returning one thing
const squareArrow2 = (x) => x * x;







//ES5
console.log(square(9));
console.log(square2(9));



//ES6 arrow function
console.log(squareArrow(8));

//ES6 concise arrow function
console.log(squareArrow2(4));



//coding challenge, create function that returns just the first name of string

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('First Last'));
