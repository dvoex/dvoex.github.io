// script.js

// Get the button and body elements
const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

// Check if dark mode was previously set in local storage (so it persists across page reloads)
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '🌑 Dark/Light Mode ☀️';  // Change button text when dark mode is enabled
}

// Function to toggle between Dark and Light mode
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');  // Toggle the 'dark-mode' class on the body

    // Update button text based on the mode
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '🌑 Dark/Light Mode ☀️';  // Change text to "🌑 Dark/Light Mode ☀️" when dark mode is on
        localStorage.setItem('darkMode', 'enabled');  // Store dark mode preference in local storage
    } else {
        toggleButton.textContent = '🌑 Dark/Light Mode ☀️';  // Change text to "🌑 Dark/Light Mode ☀️" when dark mode is off
        localStorage.setItem('darkMode', 'disabled');  // Store light mode preference in local storage
    }
});
