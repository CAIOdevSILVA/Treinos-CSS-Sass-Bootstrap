const signUpBtn = document.querySelector("#signupBtn");
const signInBtn = document.querySelector("#signinBtn");
const nameField = document.querySelector("#nameField");
const title = document.querySelector("#title");

signInBtn.onclick = function(){
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In"
  signUpBtn.classList.add("disable")
  signInBtn.classList.remove("disable")
}

signUpBtn.onclick = function(){
  nameField.style.maxHeight = "65px";
  title.innerHTML = "Sign Up"
  signUpBtn.classList.remove("disable")
  signInBtn.classList.add("disable")
}