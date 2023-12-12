const registeredUser = window.localStorage.getItem("exampleLogin__firstname");
window.addEventListener('DOMContentLoaded', displayName)

function displayName() {
    var usernameDisplay = document.getElementById('usernameDisplay');
    usernameDisplay.innerHTML = `${registeredUser}`;

};