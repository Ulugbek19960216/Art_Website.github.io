// --- Dropdown Menu Toggling ---
// Selecting the elements from the DOM
const toggleBtn = document.querySelector('.toggle-btn'); // The toggle button element
const toggleBtnIcon = document.querySelector('.toggle-btn i'); // The icon inside the toggle button
const dropDownMenu = document.querySelector('.dropdown-menu'); // The dropdown menu to be shown/hidden

// Adding a click event listener to the toggle button
toggleBtn.onclick = function () {
    // Toggling the 'open' class on the dropdown menu to show or hide it
    dropDownMenu.classList.toggle('open');

    // Checking if the dropdown menu is currently open or closed
    const isOpen = dropDownMenu.classList.contains('open');

    // Changing the icon of the toggle button based on whether the dropdown is open or closed
    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark' // Icon when the dropdown is open
        : 'fa-solid fa-bars'; // Icon when the dropdown is closed
};

// --- Swiper (Slider) Initialization ---
// Initializing a new Swiper instance for the tranding-slider element
var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow', // Using the 'coverflow' effect for the slider
  autoplay: {
    delay: 2000, // Setting autoplay delay to 2 seconds
  },
  grabCursor: true, // Showing a grab cursor when hovering over the slider
  centeredSlides: true, // Centering the slides in the slider
  loop: true, // Enabling loop to create a continuous sliding effect
  slidesPerView: 'auto', // Automatically adjusting the number of visible slides based on container width
  spaceBetween: 0, // Setting the space between slides to 0
  coverflowEffect: {
    rotate: 0, // Setting the rotation angle for the coverflow effect to 0
    stretch: 0, // Setting the stretch of the coverflow effect to 0
    depth: 450, // Setting the depth (z-index) of the slides in the coverflow effect
    modifier: 3, // Setting the scale modifier for the slides in the coverflow effect
  },
  pagination: {
    el: '.swiper-pagination', // Specifying the element to display pagination bullets
    clickable: true, // Enabling the pagination bullets to be clickable
  },
  navigation: {
    nextEl: '.swiper-button-next', // Specifying the element for the next slide button
    prevEl: '.swiper-button-prev', // Specifying the element for the previous slide button
  }
});






