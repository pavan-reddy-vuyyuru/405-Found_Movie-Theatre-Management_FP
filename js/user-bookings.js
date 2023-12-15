document.addEventListener("DOMContentLoaded", function() {
    displayBookingHistory();
});

function displayBookingHistory() {
    var bookingHistory = getBookingHistory();
    var historyContainer = document.getElementById("bookingHistory");

    if (bookingHistory.length > 0) {
        var dateSelected = [];
        dateSelected.push(localStorage.getItem('selectedDate'));
        for (var index = 0; index < bookingHistory.length; index++) {
            var booking = bookingHistory[index];
            var totalPrice = booking.numSeats * 20; // Assuming ticket price is $20
            var name = Array.isArray(booking.name) ? booking.name[0] : booking.name;

            // Create HTML content using string concatenation
            var bookingInfoHTML =
                "<div>" +
                "<h2>Booking " + (index + 1) + "</h2>" +
                "<p>Name: " + name + "</p>" +
                "<p>Number of Seats: " + booking.numSeats + "</p>" +
                "<p>Seats: " + booking.seats.join(", ") + "</p>" +
                "<p>Total Price: $" + totalPrice + "</p>" +
                "<p>Movie : Batman" +
                "<p>Date : " + dateSelected +
                "<hr>" +
                "</div>";

            // Append HTML content to the historyContainer
            historyContainer.innerHTML += bookingInfoHTML;
        }
    } else {
        historyContainer.innerHTML = "<p>No booking history available.</p>";
    }
}

function getBookingHistory() {
    var bookingHistory = localStorage.getItem('latestBooking');
    return bookingHistory !== null ? JSON.parse(bookingHistory) : [];
}