
// Definition: Simple Function
// function sayHello() {
//     console.log('Hello Everyone');
// }

// Calling: Simple Function
// sayHello();
// sayHello();
// sayHello();

// ---------------------------------------------- // 

// Definition: Parameterized Function
// function getFullName(firstName, lastName) {
//     console.log(`${firstName} ${lastName}`);
// }

// Calling: Parameterized Function
// getFullName('King', 'Kochhar');
// getFullName(100, 200);
// getFullName('King', 'Kochhar', 'Smith');
// getFullName('King');

// ------------------------------------------- // 

// Definition: Function with Return Statement
// function getFullName(firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }

// Calling: Function with Return Statement
// var fullName = getFullName('John', 'Smith')
// console.log(fullName);

// ------------------------------------------- // 

// Definition: Function Expression
// var userFullName = function getFullName(firstName, lastName) {
//     console.log(`${firstName} ${lastName}`);
// };

// Calling: Function Expression
// userFullName('Bhawna', 'Gunwani');

// ------------------------------------------- // 

// Definition: Annonymous Function (Unnamed Function)
// var userFullName = function (firstName, lastName) {
//     console.log(`${firstName} ${lastName}`);
// };

// Calling: Annonymous Function
// userFullName('Sarah', 'Bowling');

// ------------------------------------------- // 

var sayHello = () => console.log('Hello');

sayHello();
sayHello();

var displayDetails = () => {
    console.log('Hello');
    console.log('Lets Learn JavaScript')
}

displayDetails();
displayDetails();

var addition = (num1, num2) => console.log(num1 + num2);

addition(100, 200);
addition(1000, 2000);

var subtract = (num1, num2) => (num1 - num2);

var subtract = (num1, num2) => {
    var difference = num1 - num2;
    return difference;
};

console.log(subtract(300, 200));
console.log(subtract(1300, 200));
