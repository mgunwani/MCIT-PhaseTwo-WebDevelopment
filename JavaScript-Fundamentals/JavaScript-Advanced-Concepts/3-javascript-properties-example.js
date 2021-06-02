
function Person() {
    var firstName = 'King';
    var lastName = 'Kochhar';
    var age = 30;

    Object.defineProperties(this, {
        "FirstName": {
            get: function () { return firstName },
            set: function (value) { firstName = value; }
        },
        "LastName": {
            get: function () { return lastName },
            set: function (value) { lastName = value; }
        },
        "Age": {
            get: function () { return age },
            set: function (value) {
                if (value >= 18) {
                    age = value;
                }
            }
        }
    })
}

var person1 = new Person();
person1.FirstName = "John";
console.log(person1.FirstName);
person1.LastName = "Smith";
console.log(person1.LastName);
person1.Age = 13;
console.log(person1.Age);

