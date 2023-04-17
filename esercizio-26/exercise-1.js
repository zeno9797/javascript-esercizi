// # Rest parameters and spread syntax - Exercise 65

// The sum function has a high numbers of parameters. How can we improve the code in order to make it accept any amount of numbers to sum as its argument?


function sum(...args) {
    let total = 0;
    for (const i in args) {
        total = total + args[i];
   }
   return total;
}

console.log(sum(1, 2, 3, 4, 5));