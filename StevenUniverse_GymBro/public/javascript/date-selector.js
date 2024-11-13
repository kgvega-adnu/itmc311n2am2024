document.addEventListener("DOMContentLoaded", function() {
    var dateBtn = document.getElementById("date-btn");
    var dateList = document.getElementById("date-list");
    var customDateFields = document.getElementById("custom-date");

    // Initially hide the custom date fields
    customDateFields.style.display = "none";

    // Toggle date list visibility when button is clicked
    dateBtn.addEventListener("click", function() {
        if (dateList.style.display === "none" || dateList.style.display === "") {
            dateList.style.display = "block";
        } else {
            dateList.style.display = "none";
        }
    });

    // Add event listeners to all list items
    var listItems = dateList.querySelectorAll("li");
    listItems.forEach(function(item) {
        item.addEventListener("click", function() {
            // Get the text content of the clicked item
            var selectedDate = this.textContent.trim();

            // Update the button text with the selected date
            dateBtn.textContent = selectedDate + " ▼";

            // Hide the date list after selection
            dateList.style.display = "none";

            // Show or hide custom date fields based on the selection
            if (selectedDate === "Custom") {
                customDateFields.style.display = "flex"; // Show custom date inputs
            } else {
                customDateFields.style.display = "none";  // Hide custom date inputs for other selections
            }
        });
    });
});
