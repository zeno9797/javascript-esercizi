

const sayHello = () => {
    console.log("Hello")
}

function repeatHello(callback) {
    let id = setInterval(() => {
        callback()}, 1000)
    setTimeout(() => {
        clearInterval(id)
    }, 3000)
    }

repeatHello(sayHello)

