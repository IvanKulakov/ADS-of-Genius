const slider = document.querySelector('.swiper1');
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

const slider2 = document.querySelector('.swiper2');
const sl2 = new Swiper(slider2,{
    direction: 'horizontal',
    slidesPerView: 4,
    loop: false,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        910: {
            slidesPerView:3,
            spaceBetween: 40
        },
        1140: {
            slidesPerView:4,
            spaceBetween: 40
        }

    },

    speed: 500,
    // autoplay: {
    //     disableOnInteraction: false,
    //     enabled: true,
    //     delay: 0,
    //     pause: false,
    //
    // },
    navigation: {
        nextEl: ".command_units_nav-next",
        prevEl: ".command_units_nav-prev",
    },
})