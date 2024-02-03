var currentImageIndex = 0;
var imageUrls = [
  '/stocks/header1.jpg',
  '/stocks/header2.jpg',
  '/stocks/header3.jpg'
  /* Add more image URLs as needed */
];

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
  updateBackground();
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
  updateBackground();
}

function updateBackground() {
  var header = document.querySelector('.header-container');
  header.style.backgroundImage = `linear-gradient(
    to top,
    rgba(219, 219, 219, 0.394),
    rgba(28, 28, 28, 0.713)
  ), url(${imageUrls[currentImageIndex]})`;
}





// =========================================================================================================
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.querySelector("#navbar-toggle");
  const navbarMenu = document.querySelector("#navbar-menu");
  const navbarLinksContainer = document.querySelector(".navbar-links");
  let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

  const toggleNavbarVisibility = () => {
    isNavbarExpanded = !isNavbarExpanded;
    navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
  };

  navbarToggle.addEventListener("click", toggleNavbarVisibility);

  navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
  navbarMenu.addEventListener("click", toggleNavbarVisibility);
});

// ===================header slider=================

document.addEventListener("DOMContentLoaded", function () {
  let scrollContainer = document.querySelector(".gallery");
  let backBtn = document.getElementById("backbtn");
  let nextBtn = document.getElementById("nextbtn");

  // Amount of pixels to scroll
  let scrollAmount = 500;

  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  });

  if (backBtn) {
    backBtn.addEventListener("click", function () {
      // Scroll the gallery backwards
      scrollContainer.scrollLeft -= scrollAmount;
      console.log("Back button clicked");
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      // Scroll the gallery forwards
      scrollContainer.scrollLeft += scrollAmount;
    });
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//     const sliderContainer = document.querySelector(".slider-container");
//     const sliderItems = document.querySelectorAll(".slider-item");
//     let currentIndex = 0;

//     const showSlide = (index) => {
//       sliderItems.forEach((item, i) => {
//         item.style.display = i === index ? "block" : "none";
//       });
//     };

//     const nextSlide = () => {
//       currentIndex = (currentIndex + 1) % sliderItems.length;
//       console.log("Next Slide Index:", currentIndex);
//       showSlide(currentIndex);
//     };

//     const prevSlide = () => {
//       currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
//       showSlide(currentIndex);
//     };

//     // Initial display
//     showSlide(currentIndex);

//     // Event listeners for arrow clicks
//     sliderContainer.addEventListener("click", (e) => {
//       const target = e.target.closest(".slider-link");
//       if (target) {
//         e.preventDefault();
//         if (target.classList.contains("fa-arrow-left-long")) {
//           prevSlide();
//         } else if (target.classList.contains("fa-arrow-right-long")) {
//           nextSlide();
//         }
//       }
//     });
//   });
