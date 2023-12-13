function toggleNavbar() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.style.display = navbarLinks.style.display === 'flex' ? 'none' : 'flex';
}
const registeredUser = window.localStorage.getItem("exampleLogin__firstname");
window.addEventListener('DOMContentLoaded', displayName)

function displayName() {
    var usernameDisplay = document.getElementById('usernameDisplay');
    usernameDisplay.innerHTML = `${registeredUser}`;

};