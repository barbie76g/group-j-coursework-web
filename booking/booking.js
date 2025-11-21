/*
  attach the BOOKING 'element' of html

*/
const bookingForm = document.getElementById('BOOKING');

// When the user clicks the 'BOOK NOW' button, the 'submit' event fires.
bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();
    handleFormSubmission();
});

/*
 the function that collects and validates the data.
*/
function handleFormSubmission() {
    // --- Data Collection ---
    // Use the document.getElementById() method to get the value of each input.
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const checkInDate = document.getElementById('checkin').value;
    const checkOutDate = document.getElementById('checkout').value;
    
    // For the <select> (dropdown)
    const roomSelect = document.getElementById('room-select');
    const roomType = roomSelect.options[roomSelect.selectedIndex].value;
    const paymentMethodElement = document.querySelector('input[name="paymentMethod"]:checked');
    const paymentMethod = paymentMethodElement ? paymentMethodElement.value : 'Not Selected';

    // validation of data

    if (firstName === '' || lastName === '' || email === '') {
        alert('Please fill out your First Name, Last Name, and Email to proceed with the booking.');
        return; // Stop the function if validation fails.
    }
    
    // --- Data Output ---
    
    console.log('--- BOOKING SUBMISSION ATTEMPT ---');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Check-in Date:', checkInDate);
    console.log('Check-out Date:', checkOutDate);
    console.log('Room Type:', roomType);
    console.log('Payment Method:', paymentMethod);

    // --- Success Message ---
    
    alert('Booking details collected successfully! Check the browser console (F12) for the data.');

    
}