// In the exercise.js file, we find a user object. Write a function that saves the user object in localStorage with its 'user' key.

const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUser(obj) {
  localStorage.setItem("obj", JSON.stringify(obj));
  
}

saveUser(user)
