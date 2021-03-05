// Gallery
// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 1,
//     spaceBetween: 40,
//     loop: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });


// Reviews
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 1,
  slidesPerView: 4,
  loop: true,
  centeredSlides: true,
  freeMode: true,
  loopedSlides: 4,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev'
  },
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 1,
  loop: true,
  freeMode: true,
  loopedSlides: 1,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev'
    },
    thumbs: {
      swiper: galleryThumbs
    }
});


// Services
(function() {
    const buttonsTab = document.querySelector('.services__menu');
    const COLOR_TAB_1= '#fff';
    const COLOR_TAB_2= '#717171';
    const BACKGROUND_COLOR_TAB_1= '#15708b';
    const BACKGROUND_COLOR_TAB_2 = '#F8FCFE';
    function changeTabsOnClick(event) {
        if (event.target.className == 'services__menu-item') {
            const dataTabMenu = event.target.getAttribute('data-tab');
            const tabContentItem = document.querySelectorAll('.services__menu-content-item');
            const tabsTitle = document.querySelectorAll('.services__menu-item');
            for (let item of tabsTitle) {
                item.classList.remove('services__menu-item--active');
            }
            for (let i = 0; i < tabContentItem.length; i++) {
                const dataTabContent = tabContentItem[i].getAttribute('data-tab');
                if (dataTabMenu == dataTabContent) {
                    tabContentItem[i].style.display = 'flex';
                    tabsTitle[i].classList.add('services__menu-item--active');
                    tabsTitle[i].style.color = COLOR_TAB_1;
                    tabsTitle[i].style.backgroundColor = BACKGROUND_COLOR_TAB_1;
                } else {
                    tabContentItem[i].style.display = 'none'
                    tabsTitle[i].style.color = COLOR_TAB_2;
                    tabsTitle[i].style.backgroundColor = BACKGROUND_COLOR_TAB_2;
                }
            }
        }
    };
    buttonsTab.addEventListener('click', changeTabsOnClick);
}());

// Button top
(function(){
  const btnTopEl = document.querySelector('.header__menu-btn-top');
  function tracScroll() {
    if (window.pageYOffset > 250) {
      btnTopEl.style.display = 'block';
    } else {
      btnTopEl.style.display = 'none';
    }
  }
  function btnToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -45);
      setTimeout(btnToTop, 0)
    }
  }
  window.addEventListener('scroll', tracScroll);
  btnTopEl.addEventListener('click', btnToTop);
}());


