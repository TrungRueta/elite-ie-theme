var o=Object.defineProperty;var n=(s,e,t)=>e in s?o(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var a=(s,e,t)=>(n(s,typeof e!="symbol"?e+"":e,t),t);import{S as l}from"./theme.splide.esm.chunk.js";import"./theme.splide-core.min.chunk.js";class r extends HTMLElement{constructor(){super();a(this,"splideTarget",this.querySelector(".splide"));a(this,"splide")}connectedCallback(){this.splide=new l(this.splideTarget,this.options()),this.splide.mount()}disconnectedCallback(){this.splide.destroy()}options(){var t;return console.log(this.dataset),{type:(t=this.dataset.type)!=null?t:"slide",rewind:this.dataset.rewind==="true",pagination:this.dataset.pagination==="true",perPage:1,perMove:1,arrows:!1,autoplay:this.dataset.autoplay==="true",pauseOnHover:!1,autoHeight:!0,interval:1500+(this.dataset.interval?+this.dataset.interval*1e3:4e3),speed:1500,drag:!0}}}const i="slideshow-component-2";customElements.get(i)||customElements.define(i,r);
