let hrs = document.getElementById('hours');
let mins = document.getElementById('minutes');
let secs = document.getElementById('seconds');
let timeFormatToggle = document.getElementById('time-format-toggle');
let is12HourFormat = false; // Flag to track the format

function updateClock() {
    let currentTime = new Date();
    let hours = currentTime.getHours(); 
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    if (is12HourFormat) {
        // Convert to 12-hour format
        hours = hours % 12 || 12; // Handle midnight (0)
    }

    hrs.textContent = hours.toString().padStart(2, '0'); // Zero-padding for single digits
    mins.textContent = minutes.toString().padStart(2, '0');
    secs.textContent = seconds.toString().padStart(2, '0');
}

timeFormatToggle.addEventListener('click', () => {
    is12HourFormat = !is12HourFormat; // Toggle the flag
    updateClock(); // Update the clock to reflect the new format
});

setInterval(updateClock, 1000);