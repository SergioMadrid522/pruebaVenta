const loggedEmail = localStorage.getItem("loggedInUser");
const userInfo = document.getElementById("user-info");
const index = document.getElementById("index");

const user = document.createElement("span");
user.classList.add('user');

if (loggedEmail) {
    const storedData = JSON.parse(localStorage.getItem(loggedEmail));
    console.log("Bienvenido:", storedData.username);
    user.style.display = "inline"
    user.innerHTML = storedData.username;
} 

userInfo.insertBefore(user, index);