let isLogged = true

function promise1(arg) {
    return new Promise((resolve, reject) => {
        if(arg) {
            resolve(Math.random())
        } else { 
            reject(new Error ("arg false")) }
    })
}

function promise2(arg2) {
    return new Promise((resolve, reject) => {
        if(arg2 > 0.5) {
            resolve({name: "John", age: 24})
        } else {
            reject(new Error("arg < 0.5"))
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
    }).finally(() => {
        console.log("Messaggio finale")
    })


   