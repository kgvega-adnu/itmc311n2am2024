document.addEventListener('DOMContentLoaded', function() {
    const addGymBtn = document.getElementById('addGymBtn');
    const mainContent = document.getElementById('mainContent');

    // Function to load add-gym.html content
    function loadAddGymPage() {
        fetch('../../views/YourGym/add-gym.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                mainContent.innerHTML = data; // Update the main content area with new content

                // Push the current state into history
                window.history.pushState({ page: 'add-gym' }, 'Add Gym', 'add-gym.html');

                // Set up exit buttons after new content is loaded
                setupExitButtons();
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    // Initial setup of the event listener for the Add Gym button
    addGymBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default button behavior
        loadAddGymPage();
    });

    // Function to set up event listeners for exit buttons
    function setupExitButtons() {
        const backButton = document.getElementById('goBackButton');
        const cancelButton = document.getElementById('cancelButton');

        if (backButton) {
            backButton.addEventListener('click', handleBackButtonClick);
        }

        if (cancelButton) {
            cancelButton.addEventListener('click', handleCancelButtonClick);
        }
    }

    function handleBackButtonClick() {
        window.history.back(); // Navigate back in history
    }

    function handleCancelButtonClick() {
        window.history.back(); // Navigate back in history
    }

    // Handle the popstate event to manage the back navigation
    window.addEventListener('popstate', function(event) {
        if (event.state) {
            if (event.state.page === 'add-gym') {
                loadAddGymPage(); // Load add-gym content again
            } else {
                // Redirect to the homepage if going back from add-gym
                redirectToHomePage();
            }
        } else {
            redirectToHomePage(); // Redirect to homepage if there is no state
        }
    });

    // Function to redirect to the homepage
    function redirectToHomePage() {
        window.location.href = 'urgym.html'; // Replace with your actual homepage URL
    }
});
