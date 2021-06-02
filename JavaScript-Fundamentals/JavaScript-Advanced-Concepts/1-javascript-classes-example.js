
/* Classes in JavaScript */

function Person() {
    this.firstName = "King";
    this.lastName = "Kochhar";
    this.getFullName = function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

var person1 = new Person();
console.log(person1.firstName);
console.log(person1.lastName);
person1.getFullName();

console.log('-----------');
var person2 = new Person();
console.log(person2.firstName);
console.log(person2.lastName);
person2.getFullName();

