function show() {
  const search = document.getElementById('search');
  search.style.display = 'block';
}
// ---------------------------CAROUSEL----------------------------
let slidePosition = 0;
const sliders = document.querySelectorAll('.slider-items');
const totalSlider = sliders.length;
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
btnPrev.addEventListener('click', function () {
  prevSlide();
});
btnNext.addEventListener('click', function () {
  nextSlide();
});
function updatePosition() {
  sliders.forEach(slide => {
    slide.classList.remove('active');
    slide.classList.add('hidden');
  });
  sliders[slidePosition].classList.add('active');
}
function prevSlide() {
  slidePosition = (slidePosition === 0) ? totalSlider - 1 : slidePosition - 1;
  updatePosition();
}
function nextSlide() {
  slidePosition = (slidePosition === totalSlider - 1) ? 0 : slidePosition + 1;
  updatePosition();
}
function autoSlide() {
  nextSlide();
}
setInterval(autoSlide, 4000);
// ---------------------------Announcement-----------------------------
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }
  const offset = -slideIndex * 100;
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}
function nextAnnounce() {
  showSlide(slideIndex + 1);
}
document.addEventListener('DOMContentLoaded', () => {
  setInterval(nextAnnounce, 4000);
});
// ----------------------------------Admission-----------------------------------
let imageIndex = 0;
const images = document.querySelectorAll('.ad-slider-item');
const totalImages = images.length;
function showImage(index) {
  if (index >= totalImages) {
    imageIndex = 0;
  } else if (index < 0) {
    imageIndex = totalImages - 1;
  } else {
    imageIndex = index;
  }
  const offset = -imageIndex * 100;
  document.querySelector('.ad-slider-inner').style.transform = `translateX(${offset}%)`;
}
function nextImage() {
  showImage(imageIndex + 1);
}
function prevImage() {
  showImage(imageIndex - 1);
}
document.querySelector('#btn-next').addEventListener('click', nextImage);
document.querySelector('#btn-prev').addEventListener('click', prevImage);
document.addEventListener('DOMContentLoaded', () => {
  setInterval(nextImage, 4000);
});
// --------------------------------------Events---------------------------------
const container = document.getElementById('event-container');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const itemsToShow = 1;
const itemWidth = container.children[0].offsetWidth + 30;
let scrollPosition = 0;
nextBtn.addEventListener('click', () => {
  if (scrollPosition < container.scrollWidth - container.clientWidth) {
    scrollPosition += itemWidth * itemsToShow;
    container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  }
});
prevBtn.addEventListener('click', () => {
  if (scrollPosition > 0) {
    scrollPosition -= itemWidth * itemsToShow;
    container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  }
});
// ----------------------Scroll to top of the Page ----------------------------
const btn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', function () {
  if (window.scrollY > 200) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
});
btn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});