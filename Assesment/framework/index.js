const reservationForm = document.getElementById("reservationForm");
const reservationList = document.getElementById("reservationList");

const reservations = [];

reservationForm.onsubmit = function (event) {
    event.preventDefault();  

    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;
    const book = document.getElementById("bookName").value;
    const date = document.getElementById("pickupDate").value;

    const reservation = {
        name: name,
        email: email,
        book: book,
        date: date
    };

    reservations.push(reservation);

    displayReservations();

    reservationForm.reset();
};

function displayReservations() {

    reservationList.innerHTML = "";

    for (let i = 0; i < reservations.length; i++) {

        const res = reservations[i];

        const item = document.createElement("li");
        item.className = "list-group-item";

        item.innerHTML =
            "<strong>" + res.book + "</strong> reserved by <strong>" + res.name + "</strong>" +
            "<br>Email: " + res.email +
            "<br>Pickup Date: " + res.date;

        reservationList.appendChild(item);
    }
}
