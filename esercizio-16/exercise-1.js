// Class definition

// # Classes - Exercise 55

// Define a class called `Person` that takes in two arguments (`firstName` and `lastName`) in the constructor.

// const developer = new Person('Mario', 'Rossi');
// console.log(developer.firstName + " " + developer.lastName);



class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const developer = new Person('Mario', 'Rossi');
console.log(developer.firstName + " " + developer.lastName);

