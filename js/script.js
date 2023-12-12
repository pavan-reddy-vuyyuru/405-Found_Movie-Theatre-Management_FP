function onLoaderFunc() {
    var seatStructures = document.querySelectorAll(".seatStructure *");
    var displayerBoxes = document.querySelectorAll(".displayerBoxes *");

    seatStructures.forEach(function(element) {
        element.disabled = true;
    });

    displayerBoxes.forEach(function(element) {
        element.disabled = true;
    });
}

function justalert() {
    //console.log("We r here");
    alert("Thanks for Booking the tickets...");
}

function takeData() {
    var usernameValue = document.getElementById("Username").value;
    var numSeatsValue = document.getElementById("Numseats").value;

    if (usernameValue.length === 0 || numSeatsValue.length === 0) {
        alert("Please Enter your Name and Number of Seats");
    } else {
        var inputFormElements = document.querySelectorAll(".inputForm *");
        var seatStructureElements = document.querySelectorAll(".seatStructure *");

        inputFormElements.forEach(function(element) {
            element.disabled = true;
        });

        seatStructureElements.forEach(function(element) {
            element.disabled = false;
        });

        document.getElementById("notification").innerHTML =
            "<b style='margin-bottom:0px;background:yellow;text-align:center;display:block'>Please Select your Seats NOW!</b>";
    }
}



function updateTextArea() {
    let codeBlock = document.getElementById('billing-section');
    codeBlock.style.display = 'block';

    var numSeatsValue = document.getElementById("Numseats").value;

    if (document.querySelectorAll("input:checked").length === parseInt(numSeatsValue)) {
        let ticketPrice = 20;
        var seatStructureElements = document.querySelectorAll(".seatStructure *");
        seatStructureElements.forEach(function(element) {
            element.disabled = true;
        });

        var allNameVals = [document.getElementById("Username").value];
        var allNumberVals = [numSeatsValue];
        var allSeatsVals = [];

        var seatsBlockChecked = document.querySelectorAll('#seatsBlock input:checked');
        seatsBlockChecked.forEach(function(element) {
            allSeatsVals.push(element.value);
        });

        document.getElementById('nameDisplay').innerHTML = allNameVals;
        document.getElementById('NumberDisplay').innerHTML = allNumberVals;
        document.getElementById('seatsDisplay').innerHTML = allSeatsVals;
        document.getElementById('costDisplay').innerHTML = allNumberVals * ticketPrice;


        var storedName = localStorage.getItem('nameDisplay');
        var storedNumber = localStorage.getItem('NumberDisplay');
        var storedSeats = localStorage.getItem('seatsDisplay');
        var storedCost = localStorage.getItem('costDisplay');


        if (storedName !== null) {

            console.log('Name:', storedName);
        }

        if (storedNumber !== null) {

            console.log('Number:', storedNumber);
        }

        if (storedSeats !== null) {

            console.log('Seats:', storedSeats);
        }

        if (storedCost !== null) {

            console.log('Cost:', storedCost);
        }
    } else {
        alert("Please select " + numSeatsValue + " seats");
    }
}


function myFunction() {
    alert(document.querySelectorAll("input:checked").length);
}

document.querySelectorAll("checkbox").forEach(function(checkbox) {
    checkbox.addEventListener("click", function() {
        var numSeatsValue = document.getElementById("Numseats").value;

        if (document.querySelectorAll("input:checked").length === parseInt(numSeatsValue)) {
            document.querySelectorAll(":checkbox").forEach(function(cb) {
                cb.disabled = true;
            });

            document.querySelectorAll(':checked').forEach(function(checked) {
                checked.disabled = false;
            });
        } else {
            document.querySelectorAll(":checkbox").forEach(function(cb) {
                cb.disabled = false;
            });
        }
    });
});