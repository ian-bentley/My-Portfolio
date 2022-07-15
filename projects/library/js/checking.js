
const checkingForm = document.getElementById("check-in-and-out");
const checkOutBtn = document.getElementById("check-out-book-btn");
const checkInBtn = document.getElementById("check-in-book-btn");

const daysDue = 3;

checkOutBtn.onclick = () => {
    
    // Get IDs
    const bookIdTextbox = document.getElementById("book-id");
    const bookId = bookIdTextbox.value;
    const accountIdTextbox = document.getElementById("account-id");
    const accountId = accountIdTextbox.value;

    // Get check out date as an ISO string
    const dateToday = new Date();
    const dateTodayISO = dateToday.toISOString().substring(0, 10);
    // Get due date as an ISO string
    const dateDueInMilliseconds = dateToday.getTime() + daysDue *  86400000;
    const dateDue = new Date(dateDueInMilliseconds);
    const dateDueISO = dateDue.toISOString().substring(0, 10);

    // set query to database to insert this transaction

    let query = `INSERT INTO Transactions (account_id, book_id, date_checked_out, date_due) VALUES (${accountId}, ${bookId}, "${dateTodayISO}", "${dateDueISO}");`;

    console.log(query);

    // Send request to database
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {

    }
    xmlhttp.open("GET", "../search.php?query=" + query);
    xmlhttp.send();
}