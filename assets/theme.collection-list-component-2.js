var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { S as Splide } from "./theme.splide.esm.chunk.js";
class CollectionListComponent2 extends HTMLElement {
  constructor() {
    super(...arguments);
    __publicField(this, "splideTarget", this.querySelector(".splide"));
    __publicField(this, "splide");
  }
  connectedCallback() {
    this.splide = new Splide(this.splideTarget, this.options());
    this.splide.mount();
  }
  disconnectedCallback() {
    this.splide.destroy();
  }
  options() {
    var _a, _b;
    const noDesktop = this.dataset.disableDesktop === "true";
    const noMobile = this.dataset.disableMobile === "true";
    return {
      destroy: noDesktop,
      type: this.dataset.type,
      rewind: this.dataset.rewind === "true" || this.dataset.type !== "loop" && this.dataset.rewind !== "false",
      perPage: +this.dataset.colDesktop,
      perMove: 1,
      width: "100%",
      arrows: false,
      pagination: false,
      autoplay: this.dataset.autoplay === "true",
      pauseOnHover: true,
      autoHeight: true,
      interval: 1500 + +this.dataset.interval * 1e3,
      speed: 1500,
      padding: "5rem",
      gap: (_a = this.dataset.gapDesktop) != null ? _a : 8,
      breakpoints: {
        750: {
          destroy: noMobile,
          padding: "1.5rem",
          gap: (_b = this.dataset.gapMobile) != null ? _b : 4,
          perPage: +this.dataset.colMobile
        }
      }
    };
  }
}
const tag = "collection-list-component-2";
if (!customElements.get(tag)) {
  customElements.define(tag, CollectionListComponent2);
}
