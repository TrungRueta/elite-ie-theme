var r=Object.defineProperty;var a=(n,t,e)=>t in n?r(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var o=(n,t,e)=>(a(n,typeof t!="symbol"?t+"":t,e),e);class d extends HTMLElement{constructor(){super();o(this,"sectionId",this.dataset.sectionId);o(this,"fetchMoreBtn",this.querySelector(".read-more-button"));o(this,"productContainer",this.querySelector(`#product-grid[data-id="${this.sectionId}"]`));o(this,"page",1)}connectedCallback(){this.fetchMoreBtn.addEventListener("click",()=>this.fetchMore())}disconnectedCallback(){}async fetchMore(){const e=this.page+1,c=new URL(window.location.href);c.searchParams.set("page",e.toString()),c.searchParams.set("view","more");const s=(await(await fetch(c.toString(),{method:"GET"})).text()).trim();if(s==="blank"){console.log("END!"),this.fetchMoreBtn.style.display="none";return}this.productContainer.insertAdjacentHTML("beforeend",s.trim()),this.page=e}}const i="main-collection-product-grid-2-component";customElements.get(i)||customElements.define(i,d);
