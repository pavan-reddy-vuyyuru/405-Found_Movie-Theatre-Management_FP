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

function myFunction(event) {
    var x = event.touches[0].clientX;
    var y = event.touches[0].clientY;
    alert("Touch Move action", x + ", " + y);
}

function touchStart() {
    alert("Touch Start action started")
}