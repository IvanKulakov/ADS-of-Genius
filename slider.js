const slider = document.querySelector('.swiper');
const sl = new Swiper(slider, {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 5,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        910: {
            slidesPerView: 5,
            spaceBetween: 40
        }

    },
    loop: true,
    speed: 2000,
    autoplay: {
        disableOnInteraction: false,
        enabled: true,
        delay: 0,
        pause: false,

    }
});