document.addEventListener('DOMContentLoaded', function () {
    const donationAmountRadios = document.querySelectorAll('input[name="donationAmount"]');
    const customAmountInput = document.getElementById('customAmount');

    donationAmountRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            customAmountInput.value = '';
            customAmountInput.disabled = true;
        });
    });

    customAmountInput.addEventListener('focus', function () {
        donationAmountRadios.forEach(radio => {
            radio.checked = false;
        });
    });

    donationAmountRadios.forEach(radio => {
        radio.addEventListener('focus', function () {
            customAmountInput.value = '';
            customAmountInput.disabled = true;
        });
    });
});
