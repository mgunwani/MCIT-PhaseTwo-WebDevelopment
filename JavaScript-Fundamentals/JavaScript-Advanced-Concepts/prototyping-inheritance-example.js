
function Person(firstName, lastName) {
    this.firstName = firstName || 'Unknown';
    this.lastName = lastName || 'Unknnown';
}

Person.prototype.displayDetails = function () {
    console.log(`First Name : ${this.firstName}`);
    console.log(`Last Name : ${this.lastName}`);
}

function Student(firstName, lastName, grade, schoolName) {
    Person.call(this, firstName, lastName);
    this.schoolName = schoolName || 'WonderLand';
    this.grade = grade || "2nd";
}

// Student.prototype = Person.prototype
Student.prototype = new Person();
Student.prototype.constructor = Student;

var student = new Student('King', 'Kochhar', 'Goenka', "3rd");
student.displayDetails();