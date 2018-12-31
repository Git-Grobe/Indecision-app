// var nameVar = 'Scott';
// var nameVar = 'Scotty';
// console.log('nameVar', nameVar);

// let nameLet = 'Jen';
// nameLet = 'JenBrown';
// console.log('nameLet', nameLet);

// const nameConst = 'Frank';
// console.log('nameConst', nameConst);




//function scoping
// var fullName = 'Scott Grobe';


// if (fullName) {
//     var firstName = fullName.split(' ')[0]
//     console.log(firstName);
// }

// console.log(firstName);



//Block scoping
// var fullName = 'Scott Grobe';

// if (fullName) {
//     const firstName = fullName.split(' ')[0]
//     console.log(firstName); // block level scop available
    
// }

// console.log(firstName); //outside code block not available



//Block scoping
var fullName = 'Scott Grobe';


if (fullName) {
    let firstName = fullName.split(' ')[0]
    console.log(firstName); // block level scop available
    
}

console.log(firstName); //outside code block not available




//alternate option to access outside code block
// const fullName = 'Scott Grobe';
// let firstName;

// if (fullName) {
//     firstName = fullName.split(' ')[0]
//     console.log(firstName); // block level scop available
    
// }

// console.log(firstName); //outside code block not available

