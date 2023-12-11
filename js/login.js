window.addEventListener("DOMContentLoaded", setupForm);

function setupForm() {
    const form = document.getElementById("login-form");
    form.addEventListener("submit", handleSubmit);
} //setupForm

function handleSubmit(event) {
    event.preventDefault();

    const {
        username,
        password,
        result
    } = event.target;


    const response = loginUser(username.value, password.value);
    result.innerHTML = response;
}

function loginUser(username, password) {
    const registeredUser = window.localStorage.getItem("exampleLogin__username");
    const registeredPassword = window.localStorage.getItem("exampleLogin__password");

    const validUser = username == registeredUser;
    const validPassword = password == registeredPassword;

    if (validUser && validPassword) {
        alert('You are logged in.');
        window.location.replace("index.html");
        return `User ${username} successfully logged-in!`;

    } else if (!validUser) {
        return `Username ${username} has not been registered. `;
    } else if (!validPassword) {
        return `Incorrect password for username ${username}`;
    }
}