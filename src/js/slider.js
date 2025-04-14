import Splide from "@splidejs/splide";

new Splide(".slider", {
  type: "loop",
  perPage: 1,
  perMove: 1,
  pagination: true,
  arrows: true,
  autoplay: true,
  interval: 4000,
  classes: {
    track: "splide__track slider__track",
    list: "splide__list slider__list",
    slide: "splide__slide slider__slide",
    arrows: "splide__arrows slider__arrows",
    arrow: "splide__arrow slider__arrow",
    pagination: "splide__pagination slider__pagination",
    page: "splide__pagination__page slider__page",
  },
  breakpoints: {
    992: {
      pagination: false,
      arrows: false,
    }
  }
}).mount();
