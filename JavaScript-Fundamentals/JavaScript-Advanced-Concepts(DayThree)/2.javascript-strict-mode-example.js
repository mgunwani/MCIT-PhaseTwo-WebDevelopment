
// "use strict";

// value = 100;
// console.log(value);

// ------------------------------- //

// "use strict";

// var person = { name: 'King', age: 23 };
// console.log(person);
// delete person;  // Delete of an unqualified identifier in strict mode.
// console.log(person);

// ------------------------------- //

// "use strict";

// function square(num1, num1) {
//     return num1 + num1;
// }

// console.log(square(10, 20));

// ------------------------------- //

// "use strict";

// eval("var x = 5");
// console.log(x);     // ReferenceError: x is not defined

// ------------------------------- //

// "use strict";

// var eval = 10;
// console.log(eval);     // SyntaxError: Unexpected eval or arguments in strict mode

// ------------------------------ //

// "use strict";

// // Using Without with statement
// var radius = 5;
// var area = Math.PI * radius * radius;  // (PI=3.14)
// console.log(area);

// // Using With Statement
// var radius1 = 5;
// with (Math) { // Strict mode code may not include a with statement
//     var area1 = PI * radius1 * radius1;
//     console.log(area1);
// }

// ------------------------------ //

// "use strict";

// var person = { name: 'King', age: 30 }

// Object.defineProperty(person, "gender", { value: 'male', writable: false });

// console.log(person.gender);
// person.gender = 'Male'; // TypeError: Cannot assign to read only property
// console.log(person.gender);

// ------------------------------ //

"use strict";

var person = { name: 'Shailendra', age: 45 };
console.log(Object.isExtensible(person));   // True
Object.freeze(person);  // lock down the person object.
console.log(Object.isExtensible(person));   // False
person.gender = 'Male';    // TypeError: Cannot add property gender, object is not extensible
console.log(person);


