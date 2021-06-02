
/* Classes and Constructor in JavaScript */

function Person(fname, lname) {
    this.firstName = fname || "Ram";
    this.lastName = lname || "Ram";
    this.getFullName = function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

var person1 = new Person('King', 'Kochhar');
console.log(person1.firstName);
console.log(person1.lastName);
person1.getFullName();

console.log('-----------');

var person2 = new Person('John', 'Smith');
console.log(person2.firstName);
console.log(person2.lastName);
person2.getFullName();

console.log('-----------');

var person3 = new Person();
console.log(person3.firstName);
console.log(person3.lastName);
person3.getFullName();
