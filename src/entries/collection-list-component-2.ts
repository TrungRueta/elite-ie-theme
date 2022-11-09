import type { Options } from '@splidejs/splide';
import Splide from '@splidejs/splide';

class CollectionListComponent2 extends HTMLElement {
  private readonly splideTarget = this.querySelector('.splide') as HTMLDivElement;
  private splide: Splide;

  connectedCallback() {
    // splide
    this.splide = new Splide(this.splideTarget, this.options());
    this.splide.mount();
  }

  disconnectedCallback() {
    this.splide.destroy();
  }

  private options(): Options {
    const noDesktop = this.dataset.disableDesktop === 'true';
    const noMobile = this.dataset.disableMobile === 'true';

    return {
      destroy: noDesktop,
      type: this.dataset.type,
      rewind:
        this.dataset.rewind === 'true' ||
        (this.dataset.type !== 'loop' && this.dataset.rewind !== 'false'),
      perPage: +this.dataset.colDesktop,
      perMove: 1,
      width: '100%',
      arrows: false,
      pagination: false,
      autoplay: this.dataset.autoplay === 'true',
      pauseOnHover: true,
      autoHeight: true,
      interval: 1500 + +this.dataset.interval * 1000,
      speed: 1500,
      // easing: 'cubic-bezier(0.57,0.12,0,1.25)',
      // easingFunc: 'cubic-bezier(.47,.98,.82,.96)',
      // start: sample(range(0, max, 1)),
      // start: 0,
      // drag: 'free'
      padding: '5rem',
      gap: this.dataset.gapDesktop ?? 8,
      breakpoints: {
        750: {
          destroy: noMobile,
          padding: '1.5rem',
          gap: this.dataset.gapMobile ?? 4,
          perPage: +this.dataset.colMobile,
        },
      },
    };
  }
}

const tag = 'collection-list-component-2';

if (!customElements.get(tag)) {
  customElements.define(tag, CollectionListComponent2);
}
