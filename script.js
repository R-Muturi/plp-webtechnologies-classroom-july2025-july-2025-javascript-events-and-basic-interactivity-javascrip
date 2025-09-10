// script.js

// ----------------------------------------------------
// Part 1: JavaScript Event Handling
// ----------------------------------------------------

// Select the button and the message paragraph from the DOM
const messageButton = document.getElementById('message-btn');
const messageText = document.getElementById('message-text');

// Add a 'click' event listener to the button
// When the button is clicked, this function will run.
messageButton.addEventListener('click', () => {
    // Toggle the 'hidden' class to show or hide the message
    // The .toggle() method adds the class if it's not there, and removes it if it is.
    messageText.classList.toggle('hidden');
});


// ----------------------------------------------------
// Part 2: Interactive Elements
// ----------------------------------------------------

// --- Light/Dark Mode Toggle ---

// Select the mode toggle button and the body element
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

// Add a 'click' event listener to the toggle button
modeToggle.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body.
    // CSS rules in style.css will change the colors based on this class.
    body.classList.toggle('dark-mode');
    // Change the button text based on the current mode
    if (body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Toggle Light Mode';
    } else {
        modeToggle.textContent = 'Toggle Dark Mode';
    }
});

// --- Collapsible FAQ Section ---

// Select all elements with the class 'faq-question'
const faqQuestions = document.querySelectorAll('.faq-question');

// Loop through each question and add a 'click' listener
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Find the next sibling element, which is the answer
        const answer = question.nextElementSibling;
        // Toggle the 'hidden' class on the answer to show/hide it
        answer.classList.toggle('hidden');
    });
});


// ----------------------------------------------------
// Part 3: Form Validation
// ----------------------------------------------------

// Select the form and all relevant input fields
const registrationForm = document.getElementById('registration-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const successMessage = document.getElementById('form-success-message');

// Define a function to show an error message
const showError = (input, message) => {
    const formGroup = input.parentElement;
    const errorMsg = formGroup.querySelector('.error-message');
    formGroup.classList.add('error');
    errorMsg.textContent = message;
};

// Define a function to clear an error message
const clearError = (input) => {
    const formGroup = input.parentElement;
    formGroup.classList.remove('error');
    const errorMsg = formGroup.querySelector('.error-message');
    errorMsg.textContent = '';
};

// Define the main validation function
const validateForm = () => {
    let isValid = true;

    // Validate Username: must be at least 3 characters
    if (usernameInput.value.length < 3) {
        showError(usernameInput, 'Username must be at least 3 characters.');
        isValid = false;
    } else {
        clearError(usernameInput);
    }

    // Validate Email: using a simple regex for format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email address.');
        isValid = false;
    } else {
        clearError(emailInput);
    }

    // Validate Password: must be at least 6 characters
    if (passwordInput.value.length < 6) {
        showError(passwordInput, 'Password must be at least 6 characters.');
        isValid = false;
    } else {
        clearError(passwordInput);
    }

    // Validate Confirm Password: must match the password
    if (passwordInput.value !== confirmPasswordInput.value) {
        showError(confirmPasswordInput, 'Passwords do not match.');
        isValid = false;
    } else {
        clearError(confirmPasswordInput);
    }

    return isValid;
};

// Add a 'submit' event listener to the form
registrationForm.addEventListener('submit', (event) => {
    // Prevent the default form submission (which would reload the page)
    event.preventDefault();

    // Run the validation and check the result
    if (validateForm()) {
        // If the form is valid, show a success message
        successMessage.textContent = 'Registration successful! ✅';
        successMessage.classList.remove('hidden');
        // Clear the form fields for a new submission
        registrationForm.reset();
    } else {
        // If not valid, hide any previous success message
        successMessage.classList.add('hidden');
    }
});
