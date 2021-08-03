// Glide JS
const slider1 = document.getElementById('slider-1');

const sliderOne = new Glide(slider1, {
  type: 'carousel',
  perView: 3,
  gap: 60,
  startAt: 1,
  focusAt: 1,
  animationDuration: 500,
  animationTimingFunc: 'linear',
  breakpoints: {
    991: {
      perView: 2,
      focusAt: 0,
    },
    576: {
      perView: 1,
    },
  },
}).mount();
