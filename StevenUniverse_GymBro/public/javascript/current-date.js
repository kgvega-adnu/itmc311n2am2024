 // Function to get the current date in Philippine time zone and format it
 function getCurrentDateInPhilippines() {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        weekday: 'long',
        timeZone: 'Asia/Manila' // Set the time zone to Philippine time
    };

    // Create a new Date object and convert to the specified time zone
    const now = new Date().toLocaleDateString('en-US', options);
    return now;
}

// Function to display the current date in specified elements
function displayCurrentDate() {
    const dateElements = [
        document.getElementById('current-date'),
        document.getElementById('current-date1')
    ];

    dateElements.forEach((dateElement) => {
        dateElement.textContent = getCurrentDateInPhilippines();
    });
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', displayCurrentDate);