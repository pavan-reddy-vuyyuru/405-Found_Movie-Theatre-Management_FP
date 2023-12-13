document.addEventListener('DOMContentLoaded', function() {
    var storedFirstname = localStorage.getItem('exampleLogin__firstname');
    var storedEmail = localStorage.getItem('exampleLogin__username');
    var storedPassword = localStorage.getItem('exampleLogin__password');

    document.getElementById('firstname').value = storedFirstname;
    document.getElementById('email').value = storedEmail;
    document.getElementById('password').value = storedPassword || '';

    window.changePassword = function() {
        var newPassword = prompt('Enter new password:');
        if (newPassword !== null) {
            document.getElementById('password').value = newPassword;
            localStorage.setItem('exampleLogin__password', newPassword);
            alert('Password changed successfully!');
        }
    };
    window.signOut = function() {
        window.location.href = 'login.html';
    };
});