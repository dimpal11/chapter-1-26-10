// const menuBtn = document.getElementById('menu-btn');
// const mobileMenu = document.getElementById('mobile-menu');

// menuBtn.addEventListener('click', () => {
//   mobileMenu.classList.toggle('hidden'); // Toggle the visibility of the mobile menu
// });

// const navDialog = document.getElementById('nav-dialog');
// function handleMenu() {
//   navDialog.classList.toggle('hidden');
// }

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// hero section start



// slider

// $('.owl-carousel').on('translated.owl.carousel', function(event) {
//   $('.owl-item').removeClass('centered-item');
//   $('.owl-item.active.center').addClass('centered-item');
// });
let currentIndex = 0;
const images = document.querySelectorAll('#slider img');
const totalImages = images.length;

document.getElementById('next').addEventListener('click', () => {
    images[currentIndex].classList.add('hidden'); // Hide current image
    currentIndex = (currentIndex + 1) % totalImages; // Move to next image
    images[currentIndex].classList.remove('hidden'); // Show next image
});

document.getElementById('prev').addEventListener('click', () => {
    images[currentIndex].classList.add('hidden'); // Hide current image
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Move to previous image
    images[currentIndex].classList.remove('hidden'); // Show previous image
});
// hero setion start 

let slideIndex = 0;
const slides = document.querySelectorAll('#slider img');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
  
  dots.forEach((dot, i) => {
    dot.classList.toggle('bg-[#43916F]', i === index);
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    slideIndex = i;
    showSlide(slideIndex);
  });
});

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto slide
setInterval(nextSlide, 10000); // Change slide every 3 seconds

// Initialize first slide
showSlide(slideIndex);



// hero section end