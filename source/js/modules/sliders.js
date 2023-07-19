import Swiper from '../vendor/swiper';

const swiperContainer = document.querySelectorAll('[data-swiper]');

const coachesSlider = () => {
  if (!swiperContainer) {
    return;
  } else {
    const swiper = new Swiper('[data-swiper="coaches"]', {
      slidesPerView: 4,
      slidesPerGroup: 1,
      loop: true,
      observer: true,
      loopFillGroupWithBlank: true,
      autoHeight: true,

      navigation: {
        nextEl: '[data-swiper-button="coaches-next"]',
        prevEl: '[data-swiper-button="coaches-prev"]',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 22,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
    swiper.init();
    const duplicates = document.querySelectorAll('.swiper-slide-duplicate');
    duplicates.forEach((el) => el.removeAttribute('tabindex'));
  }
};

const feedbackSlider = () => {
  if (!swiperContainer) {
    return;
  } else {
    const swiper = new Swiper('[data-swiper="feedback"]', {
      direction: 'horizontal',
      slidesPerView: 1,
      loop: false,
      autoHeight: true,

      navigation: {
        nextEl: '[data-swiper-button="feedback-next"]',
        prevEl: '[data-swiper-button="feedback-prev"]',
      },
    });
    swiper.init();
  }
};

export {coachesSlider, feedbackSlider};
