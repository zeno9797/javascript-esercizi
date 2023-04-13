class Person {
    #firstName;
    #lastName;
    #age;
    constructor(firstName, lastName, age) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#age = age;

    }

    get getFirstName() {
        return this.#firstName
    }

    set setFirstName(newName){
        this.#firstName = newName
    }

    get getLastName() {
        return this.#lastName
    }

    set setLastName(newLastName) {
        return this.#lastName = newLastName;
    }

    get getAge() {
        return this.#age;
    }

    set setAge(newAge) {
        return this.#age = newAge;
    }


    get fullName() {
        return this.#firstName + " " + this.#lastName
    };

}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.setFirstName = 'Maria';
person.setLastName = 'Verdi';
console.log(person.fullName);


// Define a class called `Person` that takes in three parameters in the constructor (`firstName`, `lastName` and `age`). Create the getters and setters methods for each property and a getter method called `fullName` that returns the full name.
