class MainCollectionProductGrid2Component extends HTMLElement {
  private readonly sectionId = this.dataset.sectionId as string;

  private readonly fetchMoreBtn = this.querySelector('.read-more-button') as HTMLSpanElement;

  private readonly productContainer = this.querySelector(
    `#product-grid[data-id="${this.sectionId}"]`
  ) as HTMLUListElement;

  private page = 1;

  constructor() {
    super();
  }

  connectedCallback() {
    // load more
    //#region
    this.fetchMoreBtn.addEventListener('click', () => this.fetchMore());
    //#endregion
  }

  disconnectedCallback() {}

  private async fetchMore() {
    const page = this.page + 1;
    const url = new URL(window.location.href);

    url.searchParams.set('page', page.toString());
    url.searchParams.set('view', 'more');

    const get$ = await fetch(url.toString(), { method: 'GET' });
    const data = (await get$.text()).trim();

    if (data === 'blank') {
      console.log('END!');
      this.fetchMoreBtn.style.display = 'none';
      return;
    }

    this.productContainer.insertAdjacentHTML('beforeend', data.trim());
    this.page = page;
  }
}

const tag = 'main-collection-product-grid-2-component';

if (!customElements.get(tag)) {
  customElements.define(tag, MainCollectionProductGrid2Component);
}

export {};
