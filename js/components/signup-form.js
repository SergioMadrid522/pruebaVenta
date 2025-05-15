const signupForm = document.getElementById("signup-form");
const username = document.getElementById("username")
const email = document.getElementById("email");
const password = document.getElementById("password");
const repeatedPassword = document.getElementById("repeat-password");

const userData = window.localStorage;
signupForm.addEventListener("submit", (e) => {
    const storedData = JSON.stringify( {
        username: username.value,
        email: email.value,
        password:password.value
    });

    e.preventDefault();
    if(username.value === "") {
        alert("Nombre de usuario vacio");
        username.style.borderBottom = "2px solid red";
        return
    } else {
        username.style.borderBottom = "2px solid rgb(227, 227, 227)";
    }

    if (email.value === "") {
        alert("Email vacio");
        email.style.borderBottom = "2px solid red";
        return
    } else {
        email.style.borderBottom = "2px solid rgb(227, 227, 227)";
    }

    if (password.value === "") {
        alert("Contraseña vacia");
        password.style.borderBottom = "2px solid red";
        return
    } else {
        password.style.borderBottom = "2px solid rgb(227, 227, 227)";
    }

    if(password.value.length < 3) {
        alert("La contraseña no cumple con el número de caracteres mínimos");
        password.style.borderBottom = "2px solid red";
        return
    } else {
        password.style.borderBottom = "2px solid rgb(227, 227, 227)";
    }

    if (repeatedPassword.value !== password.value) {
        alert("Las contraseñas no coinciden");
        password.style.borderBottom = "2px solid red";
        repeatedPassword.style.borderBottom = "2px solid red";
        return
    }  else {
        repeatedPassword.style.borderBottom = "2px solid rgb(227, 227, 227)";
    }
    /* [username, email, password, repeatedPassword].forEach(inputs => {
        inputs.style.borderBottom = "2px solid rgb(227, 227, 227)";
    }); */
    userData.setItem(email.value, JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value
    }));
    /* localStorage.status = true;
    localStorage.setItem(email.value, JSON.stringify(storedData));
    localStorage.setItem("loggedInUser", email.value); */
    window.location.href = "../../index.html";
});