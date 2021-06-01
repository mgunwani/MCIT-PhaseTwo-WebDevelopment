
var person = new Object();
person.firstName = 'James';
person.lastName = 'Bond';
person.age = 30;
person.displayDetails = function () {
    console.log("First Name : ", this.firstName);
    console.log("Last Name : ", this.lastName);
    console.log("Current Age : ", this.age);
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
person.displayDetails();
