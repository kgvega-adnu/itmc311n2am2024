document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('goBackButton');
    const cancelButton = document.getElementById('cancelButton');

    // Go back button functionality
    backButton.addEventListener('click', function() {
        window.history.back(); // Navigate back in history
    });

    // Cancel button functionality
    cancelButton.addEventListener('click', function() {
        window.history.back(); // Navigate back in history (or replace with a specific URL if needed)
        // Alternatively, you can redirect to a specific page like this:
        // window.location.href = 'path/to/yourGymPage.html'; // Replace with your actual page URL
    });
});