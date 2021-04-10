const name = document.getElementById("name");
const password = document.getElementById("password");
const submit = document.getElementById("btn");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  if (name.value == "" && password.value == "") {
    alert("Input your username and password");
  } else if (name.value == "") {
    alert("Input your username");
  } else if (password.value == "") {
    alert("Input your password");
  } else {
    alert("Sign in successfully");
  }
});
