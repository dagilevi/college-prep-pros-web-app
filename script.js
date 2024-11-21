// script.js

// Wait for 3 seconds before loading the next screen
setTimeout(function() {
    window.location.href = "welcome.html";  // Redirect to your next page
}, 3000);  // 3000 ms = 3 seconds

// script.js

// Function to toggle the expansion of content
function toggleExpand(plan) {
    var content = document.getElementById(plan);
    // Toggle the display of the content
    if (content.style.display === "block") {
        content.style.display = "none"; // Hide content
    } else {
        content.style.display = "block"; // Show content
    }
}


document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting normally
    
    // You can process form data here (like sending it to the server)
    
    // After submission, redirect to the confirmation page
    window.location.href = "confirmation.html";  // Redirect to confirmation page
});
