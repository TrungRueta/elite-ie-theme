var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class MainCollectionProductGrid2Component extends HTMLElement {
  constructor() {
    super();
    __publicField(this, "sectionId", this.dataset.sectionId);
    __publicField(this, "fetchMoreBtn", this.querySelector(".read-more-button"));
    __publicField(this, "productContainer", this.querySelector(
      `#product-grid[data-id="${this.sectionId}"]`
    ));
    __publicField(this, "page", 1);
  }
  connectedCallback() {
    this.fetchMoreBtn.addEventListener("click", () => this.fetchMore());
  }
  disconnectedCallback() {
  }
  async fetchMore() {
    const page = this.page + 1;
    const url = new URL(window.location.href);
    url.searchParams.set("page", page.toString());
    url.searchParams.set("view", "more");
    const get$ = await fetch(url.toString(), { method: "GET" });
    const data = (await get$.text()).trim();
    if (data === "blank") {
      console.log("END!");
      this.fetchMoreBtn.style.display = "none";
      return;
    }
    this.productContainer.insertAdjacentHTML("beforeend", data.trim());
    this.page = page;
  }
}
const tag = "main-collection-product-grid-2-component";
if (!customElements.get(tag)) {
  customElements.define(tag, MainCollectionProductGrid2Component);
}
