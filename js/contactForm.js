function updateProgressBar() {
    var form = document.getElementById('myForm');
    var progress = document.getElementById('progressBar');
    var fields = form.querySelectorAll(':required');
    var completedFields = 0;

    fields.forEach(function(field) {
        if (field.checkValidity()) {
            completedFields++;
        }
    });

    var progressValue = (completedFields / fields.length) * 100;
    progress.value = progressValue;
}

function clearForm() {
    var form = document.getElementById('myForm');
    form.reset();
    document.getElementById('progressBar').value = 0;
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();
        storeFormData();
    });


    function storeFormData() {
        var mobileNumberInput = document.getElementById('mobile_number');
        var mobileNumber = mobileNumberInput.value;
        if (!/^\d{10}$/.test(mobileNumber)) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }
        var formData = {
            firstName: document.getElementById('first_name').value,
            lastName: document.getElementById('last_name').value,
            email: document.getElementById('email').value,
            url: document.getElementById('url').value,
            mobileNumber: mobileNumber,
            dob: document.getElementById('dob').value,
            gender: document.querySelector('input[name="gender"]:checked').value,
            confirm: document.getElementById('confirm').checked
        };


        localStorage.setItem('formData', JSON.stringify(formData));
        console.log(formData);
        alert('Form data submitted and stored in local storage!');
    }


});