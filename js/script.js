document.addEventListener("DOMContentLoaded", function() {
    onLoaderFunc();
});

function onLoaderFunc() {
    var seatStructures = document.querySelectorAll(".seatStructure *");

    var seatStructures = document.querySelectorAll(".seatStructure input");
    seatStructures.forEach(function(element) {
        element.disabled = true;
    });

    seatStructures.forEach(function(element) {
        element.addEventListener("click", function() {
            if (!element.classList.contains("booked")) {
                element.classList.toggle("selected");
            }
        });
    });

    // Load previously selected seats from localStorage
    var previouslySelectedSeats = getPreviouslySelectedSeats();
    previouslySelectedSeats.forEach(function(seat) {
        var selectedSeat = document.querySelector('input[value="' + seat + '"]');
        if (selectedSeat) {
            selectedSeat.checked = true;
            selectedSeat.disabled = true;
            selectedSeat.parentElement.classList.add("selected");
        }
    });
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

        seatStructureElements.forEach(function(element) {
            element.addEventListener("click", function() {
                if (!element.classList.contains("booked")) {
                    element.classList.toggle("selected");
                }
            });
        });

        document.getElementById("notification").innerHTML =
            "<b style='margin-bottom:0px;background:yellow;text-align:center;display:block'>Please Select your Seats NOW!</b>";
    }
}

function updateTextArea() {

    var numSeatsValue = document.getElementById("Numseats").value;
    var ticketPrice = 20;
    var selectedSeats = getSelectedSeats();

    // Exclude previously selected seats from validation
    var previouslySelectedSeats = getPreviouslySelectedSeats();
    var filteredSelectedSeats = selectedSeats.filter(function(seat) {
        return !previouslySelectedSeats.includes(seat);
    });

    if (filteredSelectedSeats.length === parseInt(numSeatsValue)) {
        var seatStructureElements = document.querySelectorAll(".seatStructure *");
        seatStructureElements.forEach(function(element) {
            element.disabled = true;
        });

        var allNameVals = [document.getElementById("Username").value];
        var allNumberVals = [numSeatsValue];
        var allSeatsVals = filteredSelectedSeats;

        var storedSeats = getPreviouslySelectedSeats();
        storedSeats = storedSeats.concat(allSeatsVals);

        localStorage.setItem('allBookedSeats', JSON.stringify(storedSeats));
        //Here chnaged to check the history
        var bookingData = {
            name: allNameVals,
            numSeats: numSeatsValue,
            seats: filteredSelectedSeats
        };
        var allBookings = getBookingHistory();
        allBookings.push({
            name: allNameVals,
            numSeats: numSeatsValue,
            seats: filteredSelectedSeats
        });
        localStorage.setItem('latestBooking', JSON.stringify(allBookings));

        localStorage.setItem('nameDisplay', allNameVals);
        localStorage.setItem('NumberDisplay', allNumberVals);
        localStorage.setItem('seatsDisplay', allSeatsVals);
        localStorage.setItem('costDisplay', allNumberVals * ticketPrice);

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

        document.getElementById('nameDisplay').innerHTML = allNameVals;
        document.getElementById('NumberDisplay').innerHTML = allNumberVals;
        document.getElementById('seatsDisplay').innerHTML = allSeatsVals.join(', ');
        document.getElementById('costDisplay').innerHTML = allNumberVals * ticketPrice;

        let codeBlock = document.getElementById('billing-section');
        codeBlock.style.display = 'block';

    } else {
        alert("Please select " + numSeatsValue + " seats");
    }
}

function getSelectedSeats() {
    var selectedSeats = [];
    document.querySelectorAll('.seats:checked').forEach(function(seat) {
        selectedSeats.push(seat.value);
    });
    return selectedSeats;
}

function getPreviouslySelectedSeats() {
    var bookedSeats = localStorage.getItem('allBookedSeats');
    return bookedSeats !== null ? JSON.parse(bookedSeats) : [];
}

function getBookingHistory() {
    var bookingHistory = localStorage.getItem('latestBooking');
    return bookingHistory !== null ? JSON.parse(bookingHistory) : [];
}

function justalert() {
    alert("Thanks for Booking the tickets...");
    window.location.replace("index.html");
}