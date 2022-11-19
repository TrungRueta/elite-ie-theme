var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { S as Splide } from "./theme.splide.esm.chunk.js";
import "./theme.splide-core.min.chunk.js";
class SlideshowComponent2 extends HTMLElement {
  constructor() {
    super();
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
    var _a;
    console.log(this.dataset);
    return {
      type: (_a = this.dataset.type) != null ? _a : "slide",
      rewind: this.dataset.rewind === "true",
      pagination: this.dataset.pagination === "true",
      perPage: 1,
      perMove: 1,
      arrows: false,
      autoplay: this.dataset.autoplay === "true",
      pauseOnHover: false,
      autoHeight: true,
      interval: 1500 + (this.dataset.interval ? +this.dataset.interval * 1e3 : 4e3),
      speed: 1500,
      drag: true
    };
  }
}
const tag = "slideshow-component-2";
if (!customElements.get(tag)) {
  customElements.define(tag, SlideshowComponent2);
}
