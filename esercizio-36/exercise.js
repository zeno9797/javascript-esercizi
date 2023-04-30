


const sayHello = () => {
    console.log("Hello")
}


function repeatHello(callback) {
    intervalId = setInterval(() => {
        callback()}, 1000)
        setTimeout(() => {
            clearInterval(intervalId);
          }, 5000);
    }

repeatHello(sayHello)

