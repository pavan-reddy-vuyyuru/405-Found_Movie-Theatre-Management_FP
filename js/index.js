registeredUser = window.localStorage.getItem("exampleLogin__firstname");
window.addEventListener('DOMContentLoaded', displayName)

if (!registeredUser) {
    window.location.href = 'invalid-login.html';
}

function displayName() {
    var usernameDisplay = document.getElementById('usernameDisplay');
    usernameDisplay.innerHTML = `${registeredUser}`;

};

function toggleNavbar() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.style.display = navbarLinks.style.display === 'flex' ? 'none' : 'flex';
}
document.getElementById('mainContainer').addEventListener('touchend', function() {
    touchEndFunc();
});

function touchEndFunc() {
    alert("Your touch ended");
}