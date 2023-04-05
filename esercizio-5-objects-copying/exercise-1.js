const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simone"
// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);

// data la const person2 = person1, tutti i valori all'interno dei due oggetti sono uguali. Modificando quindi un valore all'interno di person2, accadrà lo stesso anche per person1



