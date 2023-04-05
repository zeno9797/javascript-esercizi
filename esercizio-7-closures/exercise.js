// # Exercise Closures

// Starting from the previous exercise, are you able to print the value of `helloName`, after 1 second?

// Tips:

// - The method that you need to solve the exercise is: `setTimeout`
// - You can learn more about the topic checking this article: https://www.freecodecamp.org/news/closures-in-javascript/


let helloName = "hello giu"

function printName() {
    let helloName = "Hello John"

    function inner() {
        setTimeout(() => {
            console.log(helloName)
        }, 1000);
        
    }
    return inner
}


printName()()


