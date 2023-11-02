const slider = document.querySelector('.slider');
let slideIndex = 0;
const slides = slider.querySelectorAll('img');

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    updateSlider();
}

function updateSlider() {
    const offset = -slideIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

setInterval(nextSlide, 5000); // Ubah angka durasi tampilan slide
