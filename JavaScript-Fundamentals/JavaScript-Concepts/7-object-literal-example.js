
// Empty Object Literal
// var person = {}
// person.firstName = 'King';
// person.lastName = 'Kochhar';
// person.getFullName = function () {
//     console.log(this.firstName + ' ' + this.lastName);
// }

// Access the Object Literal
// console.log(person.firstName);
// console.log(person["lastName"]);
// person.getFullName();

// -------------------------------------------------- // 

// Object Literal with Properties and Methods
var person = {
    firstName: 'John',
    lastName: 'Smith',
    address: {
        street: 'Civil Lines',
        city: 'Delhi',
        country: 'India'
    },
    getFullName: function () {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

// Access the Object Literal
console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.country);
person.getFullName();

// -------------------------------------------------- // 

