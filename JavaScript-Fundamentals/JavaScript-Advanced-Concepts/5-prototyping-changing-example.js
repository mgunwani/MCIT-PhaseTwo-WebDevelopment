
function Person() {
    this.firstName = "King";
    this.lastName = "Kochhar";
}

Person.prototype.age = 30;

var p1 = new Person();
console.log("p1.age : " + p1.age);  // 30

console.log('--------------')

var p2 = new Person();
console.log("p2.age : " + p2.age);  // 30

console.log('--------------')

Person.prototype.city = 'New Delhi';

console.log('--------------')

var p3 = new Person();
console.log("p2.age : " + p2.age);  // 30
console.log("p3.age : " + p3.age);  // 30
console.log("p3.city : " + p3.city);  // New Delhi

console.log('--------------')

var p4 = new Person();
console.log("p4.age : " + p4.age);  // 30
console.log("p4.city : " + p4.city);  // New Delhi

console.log('--------------')

Person.prototype = { age: 35 };

console.log('--------------')

var p5 = new Person();
console.log("p5.age : " + p2.age);  // 30
console.log("p5.age : " + p5.age);  // 30
console.log("p5.city : " + p5.city);  // New Delhi
