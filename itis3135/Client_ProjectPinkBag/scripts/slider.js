let currentSlide = 0;

function changeSlide(n) {
    showSlide(currentSlide += n);
}

function showSlide(n) {
    const slides = document.querySelector('.slider');
    const totalSlides = slides.children.length;

    if (n >= totalSlides) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = n;
    }

    const slideWidth = 100 * currentSlide;
    slides.style.transform = `translateX(-${slideWidth}%)`;
}
