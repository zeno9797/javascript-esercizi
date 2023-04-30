// # Exercise Promise

// Write a `promise`. If the variable called `number` is greater than 10, then it returns a resolve, otherwise it returns a reject.
// Then manage the promise with `then` and `catch` in case of any reject.


let p = new Promise((resolve, reject) => {
    const number = 15
    if (number > 10) {
        resolve('greater than 10')
    } else {
        reject('lower than 10')
    }
})

p.then((message) => {
    console.log("this number is " + message)
}).catch((message) => {
    console.log("this number is " + message)
})



