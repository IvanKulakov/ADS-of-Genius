const slider = document.querySelector('.swiper');
const sl = new Swiper(slider, {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 6,
    loop: true,
    speed: 2000,
    autoplay: {
        disableOnInteraction: false,
        enabled: true,
        delay: 0,
        pause: false,

    }
});