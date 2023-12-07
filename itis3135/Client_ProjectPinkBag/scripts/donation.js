// donation.js

// Function to handle GoFundMe donation
function donateToGoFundMe() {
    window.open('https://gofund.me/38b4bedc', '_blank');
}

// Function to handle PayPal donation
function donateToPayPal() {
    window.open('https://www.paypal.me/jashimhowlader', '_blank');
}

// Event listener to trigger GoFundMe donation on click
document.getElementById('gofundme-link').addEventListener('click', donateToGoFundMe);

// Event listener to trigger PayPal donation on click
document.getElementById('paypal-link').addEventListener('click', donateToPayPal);
