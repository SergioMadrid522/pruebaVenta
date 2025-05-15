import { error } from "./sweetAlert/alerts.js";

const loginForm = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const storedData = JSON.parse(localStorage.getItem(email.value));
    if (email.value === "" && password.value === "") {
        alert("Llene los campos antes de continuar");
        //error();
        email.style.borderBottom = "2px solid red";
        password.style.borderBottom = "2px solid red";
    } else if (!storedData) {
        alert("Introduzca un email valido")
        email.style.borderBottom = "2px solid red";
        return
    } else {
        email.style.borderBottom = "2px solid rgb(227, 227, 227)";
    }
    if (storedData.password === password.value) {
        alert("Login exitoso");
        storedData.status = true;
        localStorage.setItem(email.value, JSON.stringify(storedData));
        localStorage.setItem("loggedInUser", email.value);
        password.style.borderBottom = "2px solid rgb(227, 227, 227)";
        window.location.href = "../../index.html"
    } else {
        alert("Contraseña incorrecta");
        password.style.borderBottom = "2px solid red";
    }
});