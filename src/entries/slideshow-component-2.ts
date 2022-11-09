import Splide, { type Options } from '@splidejs/splide';
import '@splidejs/splide/css/core';

class SlideshowComponent2 extends HTMLElement {
  private readonly splideTarget = this.querySelector('.splide') as HTMLDivElement;
  private splide: Splide;

  constructor() {
    super();
  }

  connectedCallback() {
    // create splide
    this.splide = new Splide(this.splideTarget, this.options());
    this.splide.mount();
  }

  disconnectedCallback() {
    this.splide.destroy();
  }

  private options(): Options {
    console.log(this.dataset);
    return {
      type: this.dataset.type ?? 'slide',
      rewind: this.dataset.rewind === 'true',
      pagination: this.dataset.pagination === 'true',
      perPage: 1,
      perMove: 1,
      arrows: false,
      autoplay: this.dataset.autoplay === 'true',
      pauseOnHover: false,
      autoHeight: true,
      interval: 1500 + (this.dataset.interval ? +this.dataset.interval * 1000 : 4000),
      speed: 1500,
      drag: true,
      // easing: 'cubic-bezier(0.57,0.12,0,1.25)',
      // easingFunc: 'cubic-bezier(.47,.98,.82,.96)',
      // start: sample(range(0, max, 1)),
      // start: 0,
      // drag: 'free'
    };
  }
}

const tag = 'slideshow-component-2';

if (!customElements.get(tag)) {
  customElements.define(tag, SlideshowComponent2);
}
