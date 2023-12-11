window.addEventListener("DOMContentLoaded", setupForm);

function setupForm() {
    const form = document.getElementById("login-form");
    form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();

    const {
        username,
        firstname,
        password,
        psw_repeat,
        result
    } = event.target;

    const response = registerUser(username.value, firstname.value, password.value, psw_repeat.value);
    result.innerHTML = response;
}

function registerUser(username, firstname, password, psw_repeat) {
    window.localStorage.setItem("exampleLogin__username", username);
    window.localStorage.setItem("exampleLogin__firstname", firstname);
    if (password == psw_repeat) {
        window.localStorage.setItem("exampleLogin__password", password);
        alert('Thank You For Signing up.');
        window.location.replace("../html/login.html");
        return `\nNew user ${username} now registered!`;
    } else {
        return `Passwords Mismatched !`
    }

}