
function Person() {
    this.firstName = "King";
    this.lastName = "Kochhar";
    this.age = 23;
    this.getFullName = function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

Person.prototype.city = 'New Delhi';
Person.prototype.displayDetails = function () {
    console.log('Dispaying Person Details..');
    console.log('First Name : ' + this.firstName);
    console.log('Last Name : ' + this.lastName);
    console.log('Current Age : ' + this.age);
    console.log('Current City : ' + this.city);
}

var person1 = new Person();
person1.getFullName();
person1.displayDetails();

console.log('-----------');

var person2 = new Person();
person2.getFullName();
person2.displayDetails();
