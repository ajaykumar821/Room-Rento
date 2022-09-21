let btnLogin = document.getElementById("login");
let btnSignUp = document.getElementById("signup");

let login = document.querySelector(".login");
let signUp = document.querySelector(".signup");

btnLogin.onclick = function(){
    signUp.classList.add("inActive");
    login.classList.add("active");
}

btnSignUp.onclick = function(){
    signUp.classList.remove("inActive");
    login.classList.remove("active");
}