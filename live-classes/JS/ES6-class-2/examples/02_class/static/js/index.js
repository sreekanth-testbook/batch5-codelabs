// Creating object using Object literal
const person1 = {
  firstName: "Virat",
  lastName: "Kohli",
  sayHello() {
    console.log("Object Literal: ", `Hello ${this.firstName} ${this.lastName}`);
  },
};

person1.sayHello();

console.log("============================");

// Creating object using Constructor function
function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;

  this.sayHello = function () {
    console.log(
      "Constructor function: ",
      `Hello ${this.firstName} ${this.lastName}`
    );
  };
}

const person2 = new Person("Sreekanth", "M E");
person2.sayHello();

const person3 = new Person("Rohit", "Sharma");
person3.sayHello();

console.log("============================");

// Creating objects using a Class
class PersonClass {
  //Constructor method
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }

  sayHello() {
    console.log("Class: ", `Hello ${this.firstName} ${this.lastName}`);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set gender(value) {
    this.genderValue = value;
  }

  get gender() {
    return this.genderValue;
  }
}

const person4 = new PersonClass("Sreekanth", "M E");

person4.sayHello();

const person5 = new PersonClass("Rohit", "Sharma");
person5.sayHello();

console.log("-------------------------");

person4.gender = "Male";
person4.fullName = "Something else"; //was ignored as fullName is a read-only property

console.log(person4.fullName, person4.gender);
