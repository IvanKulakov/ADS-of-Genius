const slider = document.querySelector('.swiper');
const sl = new Swiper(slider, {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4,
    loop: true,
    spaceBetween: 30,
    speed: 2000,
    autoplay: {
        disableOnInteraction: false,
        enabled: true,
        delay: 0,
        pause: false,

    }
});