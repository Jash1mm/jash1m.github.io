document.addEventListener('DOMContentLoaded', function () {
    // Highlight the current page in the navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // Scroll-to-top button
    const scrollToTopButton = document.getElementById('scrollToTopBtn');

    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    };

    scrollToTopButton.addEventListener('click', function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    // Donation amount calculator
    const customAmountInput = document.getElementById('customAmount');
    const donateForm = document.getElementById('donateForm');

    donateForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const customAmount = parseFloat(customAmountInput.value) || 0;

        // Perform donation logic here, e.g., send to server or display a thank you message
        alert('Thank you for your donation of $' + customAmount.toFixed(2));
    });
});
