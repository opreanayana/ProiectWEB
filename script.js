
let currentSlides = Array(11).fill(0); 

function moveSlide(sliderId, step) {
  const slider = document.getElementById(`slider${sliderId}`);
  const totalSlides = slider.children.length;
  currentSlides[sliderId] = (currentSlides[sliderId] + step + totalSlides) % totalSlides;
  slider.style.transform = `translateX(-${currentSlides[sliderId] * 100}%)`;
}
