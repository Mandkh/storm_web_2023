let currentSlides = 0;

function showSlide(index) {
    const slider = document.getElementsByClassName('slider');
    const slides = document.getElementsByClassName('slide');
    if (index >= slides.lenght) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.lenght - 1;
    } else {
        currentSlide = index;
    }
    const translateValue = -currentSlide * 100 + '%';
    slider[0].setAttribute('style', 'transform:translateX(' + translateValue + ')');
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}
// Automatic slide change (optional)
// setInterval(() => {
//       nextSlide();
// }, 3000);