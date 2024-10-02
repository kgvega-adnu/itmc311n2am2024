document.addEventListener("DOMContentLoaded", function () {
    let display = document.querySelector(".display");
    let days = document.querySelector(".days");
    let previous = document.querySelector(".left");
    let next = document.querySelector(".right");
    let selectedDisplay = document.querySelector(".selected");
    let monthDropdown = document.querySelector(".month-dropdown");
    let yearDropdown = document.querySelector(".year-dropdown");

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let selectedDate = null; // Variable to hold the selected date

    function formatDate(date) {
        return date.toLocaleString("en-US", { month: "long", day: "numeric", year: "numeric" });
    }

    function displayCalendar() {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        const firstDayIndex = firstDay.getDay();
        const numberOfDays = lastDay.getDate();

        // Format the current month and year (e.g., "October 2024")
        let formattedDate = new Date(year, month).toLocaleString("en-US", {
            month: "long",
            year: "numeric"
        });

        // Set the header to the current month and year
        display.innerHTML = formattedDate;

        // Clear the previous days
        days.innerHTML = "";

        // Fill in empty days before the first day of the month
        for (let x = 0; x < firstDayIndex; x++) {
            const div = document.createElement("div");
            div.innerHTML = ""; // Empty divs for padding before the first day
            days.appendChild(div);
        }

        // Create day elements for each day of the current month
        for (let i = 1; i <= numberOfDays; i++) {
            let div = document.createElement("div");
            let currentDate = new Date(year, month, i);

            // Store the date in a data attribute
            div.dataset.date = currentDate.toDateString(); // Full date for reference
            div.innerHTML = i; // Show day number only
            days.appendChild(div);

            // Highlight the current date with a specific color
            if (currentDate.getFullYear() === new Date().getFullYear() &&
                currentDate.getMonth() === new Date().getMonth() &&
                currentDate.getDate() === new Date().getDate()) {
                div.classList.add("current-date"); // Add highlight class for today's date
            }

            // Add click event listener to each day
            div.addEventListener("click", () => {
                // Remove circle from previously selected date
                if (selectedDate) {
                    selectedDate.classList.remove("selected-date");
                }
                // Add circle to the newly selected date
                div.classList.add("selected-date");
                selectedDate = div; // Update the selected date reference

                // Update the header with just the selected date (without day name)
                selectedDisplay.innerHTML = formatDate(new Date(year, month, div.innerHTML)); // Display selected date
            });
        }

        // If no date has been selected, display the current date
        if (!selectedDate) {
            selectedDisplay.innerHTML = formatDate(date); // Show current date
        }
    }

    // Call the function to display the calendar initially
    displayCalendar();

    // Event listener for the previous month button
    previous.addEventListener("click", () => {
        month--; // Go to the previous month
        if (month < 0) {
            month = 11; // Wrap around to December of the previous year
            year--; // Decrement the year
        }
        displayCalendar(); // Refresh the calendar display
    });

    // Event listener for the next month button
    next.addEventListener("click", () => {
        month++; // Go to the next month
        if (month > 11) {
            month = 0; // Wrap around to January of the next year
            year++; // Increment the year
        }
        displayCalendar(); // Refresh the calendar display
    });

    // Click event for displaying month dropdown
    display.addEventListener("click", (e) => {
        if (e.target.classList.contains("month-name")) {
            monthDropdown.classList.toggle("show");
            yearDropdown.classList.remove("show"); // Hide year dropdown if it's open
        } else if (e.target.classList.contains("year-number")) {
            yearDropdown.classList.toggle("show");
            monthDropdown.classList.remove("show"); // Hide month dropdown if it's open
        }
    });

    // Populate month dropdown
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    months.forEach((monthName, index) => {
        let option = document.createElement("div");
        option.innerHTML = monthName;
        option.addEventListener("click", () => {
            month = index; // Update month
            monthDropdown.classList.remove("show"); // Hide dropdown
            displayCalendar(); // Refresh the calendar
        });
        monthDropdown.appendChild(option);
    });

    // Populate year dropdown
    for (let i = year - 10; i <= year + 10; i++) {
        let option = document.createElement("div");
        option.innerHTML = i;
        option.addEventListener("click", () => {
            year = i; // Update year
            yearDropdown.classList.remove("show"); // Hide dropdown
            displayCalendar(); // Refresh the calendar
        });
        yearDropdown.appendChild(option);
    }

    // Click event to close dropdowns when clicking outside
    window.addEventListener("click", (e) => {
        if (!display.contains(e.target)) {
            monthDropdown.classList.remove("show");
            yearDropdown.classList.remove("show");
        }
    });
});
