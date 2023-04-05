const sum =  (a, b) =>  a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide =  (a, b) => a / b;


const log = function (value) {
  console.log(value);
}

let calculate = divide(subtract(multiply(sum(4, 2),sum(5, 2)),2),5)

console.log(calculate)