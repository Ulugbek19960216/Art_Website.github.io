
var swiper = new Swiper(".slide-container", {
  slidesPerView: 4, // Number of slides to show in the slider at once
  autoplay: {
    delay: 2000, // Delay between slide transitions in autoplay mode (in milliseconds)
  },
  spaceBetween: 20, // Space (in pixels) between each slide
  sliderPerGroup: 4, // Number of slides to group together when using slidesPerView: 4
  loop: true, // Enable continuous loop mode for the slider
  centerSlide: "true", // Center the currently active slide
  fade: "true", // Enable fade transition effect between slides
  grabCursor: "true", // Show a grab cursor when hovering over the slider
  pagination: {
    el: ".swiper-pagination", // Specifying the element to display pagination bullets
    clickable: true, // Enabling the pagination bullets to be clickable
    dynamicBullets: true, // Dynamically generate pagination bullets based on the number of slides
  },
  navigation: {
    nextEl: ".swiper-button-next", // Specifying the element for the next slide button
    prevEl: ".swiper-button-prev", // Specifying the element for the previous slide button
  },
  breakpoints: {
    // Responsive breakpoints for different screen sizes
    0: {
      slidesPerView: 1, // Number of slides to show at 0px and above (e.g., mobile devices)
    },
    520: {
      slidesPerView: 2, // Number of slides to show at 520px and above (e.g., small tablets)
    },
    768: {
      slidesPerView: 3, // Number of slides to show at 768px and above (e.g., tablets)
    },
    1000: {
      slidesPerView: 4, // Number of slides to show at 1000px and above (e.g., desktops)
    },
  },
});

