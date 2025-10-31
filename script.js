let currentSlide = 0;
let autoSlideInterval;

function scrollSlider(direction) {
    const slider = document.getElementById('slider');
    const scrollAmount = slider.clientWidth;
    const totalSlides = slider.children.length;
    
    if (direction === 'left') {
        slider.scrollLeft -= scrollAmount;
        currentSlide = currentSlide > 0 ? currentSlide - 1 : totalSlides - 1;
    } else {
        slider.scrollLeft += scrollAmount;
        currentSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
    }
}

function autoSlide() {
    const slider = document.getElementById('slider');
    const totalSlides = slider.children.length;
    
    currentSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
    slider.scrollLeft = currentSlide * slider.clientWidth;
}

document.addEventListener('DOMContentLoaded', function() {
    autoSlideInterval = setInterval(autoSlide, 5000);
    
    const sliderButtons = document.querySelectorAll('.slider-btn');
    sliderButtons.forEach(button => {
        button.addEventListener('click', () => {
            clearInterval(autoSlideInterval);
            setTimeout(() => {
                autoSlideInterval = setInterval(autoSlide, 5000);
            }, 10000);
        });
    });
}); 
