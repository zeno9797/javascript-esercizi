// # Exercise Promise chaining

// Write a first `promise` that takes as parameter the variable `isLogged` found in the `exercise.js` file.
// If the variable is true, then we return a random number from the resolve, otherwise we dispatch an error.
// We write a second `promise` that takes a variable of type number as a parameter. If the input parameter is greater than 0.5, in the resolve we must return the following data: `{name: "John", age: 24}`, otherwise we must dispatch an `error`.
// Once this is done, try to chain the promises to eventually return the final object `{name: "John", age: 24}`

// Tips:

// - If in doubt, watch the lesson
// - To understand how they work, you can try adding `setTimeout` to the promise functions

let isLogged = true

function promise1(arg) {
    return new Promise((resolve, reject) => {
        if(arg) {
            resolve(Math.random())
        } else { reject("arg false") }
    })
}

function promise2(arg2) {
    return new Promise((resolve, reject) => {
        if(arg2 > 0.5) {
            resolve({name: "John", age: 24})
        } else {
            reject("arg < 0.5")
        }
    })
}

promise1(isLogged)
    .then((result) => {
        console.log(result)
        return promise2(result)
    }).then((newResult) => {
        console.log(newResult)
    }).catch((err) => {
        console.log(err)
    })


   