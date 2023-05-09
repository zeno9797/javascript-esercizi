const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUser(obj) {
  localStorage.setItem("obj", JSON.stringify(obj));
  
}


function getUser() {
let userJson = localStorage.getItem("obj")
let user = JSON.parse(userJson)
return user
}

saveUser(user)
console.log(getUser())