const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4,
    loop: true,
    autoplay: {
      delay: 0,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    speed: 2000,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

});