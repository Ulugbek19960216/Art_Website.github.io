const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')


toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen 
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}



// >>>>>>>> slide>>>>>>>>>>>>>>
var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  autoplay: {
    delay: 2000,
  },
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 0,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 450,
    modifier: 3,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

