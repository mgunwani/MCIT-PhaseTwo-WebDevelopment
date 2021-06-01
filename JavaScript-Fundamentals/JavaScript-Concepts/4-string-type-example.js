
var firstName = 'Bhawna';
var lastName = "Gunwani";
console.log(firstName + ' ' + lastName);
console.log(`${firstName} ${lastName}`);

var str1 = new String("Hello World");
var str2 = new String("Hello World");
var str3 = "Hello World";

console.log(str1 == str2);  // False, 
console.log(str1 == str3);  // True
console.log(str1 === str3); // True

console.log(typeof str1);   // Object
console.log(typeof str3);   // String