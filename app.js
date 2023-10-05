const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

const slideInterval = 3000; // Time in milliseconds (3 seconds)
let slideTimer;

function showSlide(index) {
  const slideWidth = slides[0].offsetWidth;
  const offset = -index * slideWidth;
  sliderWrapper.style.transform = `translateX(${offset}px)`;

  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function handleDotClick(index) {
  currentIndex = index;
  showSlide(currentIndex);
  resetSlideTimer();
}

function resetSlideTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    if (currentIndex === 6) {
      currentIndex = 0;
      sliderWrapper.style.transform = 'translateX(0)';
    }
    showSlide(currentIndex);
  }, slideInterval);
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => handleDotClick(i));
});

showSlide(currentIndex);
resetSlideTimer();

