var Gt=Object.defineProperty;var Jt=(t,n,e)=>n in t?Gt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var M=(t,n,e)=>(Jt(t,typeof n!="symbol"?n+"":n,e),e);/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 1.0.7
*/const vt=Object.freeze({left:0,top:0,width:16,height:16}),R=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),j=Object.freeze({...vt,...R}),J=Object.freeze({...j,body:"",hidden:!1}),Kt=Object.freeze({width:null,height:null}),kt=Object.freeze({...Kt,...R});function Wt(t,n=0){const e=t.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(e===""){const o=parseInt(t);return isNaN(o)?0:r(o)}else if(e!==t){let o=0;switch(e){case"%":o=25;break;case"deg":o=90}if(o){let i=parseFloat(t.slice(0,t.length-e.length));return isNaN(i)?0:(i=i/o,i%1===0?r(i):0)}}return n}const Xt=/[\s,]+/;function Yt(t,n){n.split(Xt).forEach(e=>{switch(e.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}const At={...kt,preserveAspectRatio:""};function ct(t){const n={...At},e=(r,o)=>t.getAttribute(r)||o;return n.width=e("width",null),n.height=e("height",null),n.rotate=Wt(e("rotate","")),Yt(n,e("flip","")),n.preserveAspectRatio=e("preserveAspectRatio",e("preserveaspectratio","")),n}function Zt(t,n){for(const e in At)if(t[e]!==n[e])return!0;return!1}const k=/^[a-z0-9]+(-[a-z0-9]+)*$/,O=(t,n,e,r="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const u=o.pop(),c=o.pop(),l={provider:o.length>0?o[0]:r,prefix:c,name:u};return n&&!F(l)?null:l}const i=o[0],s=i.split("-");if(s.length>1){const u={provider:r,prefix:s.shift(),name:s.join("-")};return n&&!F(u)?null:u}if(e&&r===""){const u={provider:r,prefix:"",name:i};return n&&!F(u,e)?null:u}return null},F=(t,n)=>t?!!((t.provider===""||t.provider.match(k))&&(n&&t.prefix===""||t.prefix.match(k))&&t.name.match(k)):!1;function te(t,n){const e={};!t.hFlip!=!n.hFlip&&(e.hFlip=!0),!t.vFlip!=!n.vFlip&&(e.vFlip=!0);const r=((t.rotate||0)+(n.rotate||0))%4;return r&&(e.rotate=r),e}function ut(t,n){const e=te(t,n);for(const r in J)r in R?r in t&&!(r in e)&&(e[r]=R[r]):r in n?e[r]=n[r]:r in t&&(e[r]=t[r]);return e}function ee(t,n){const e=t.icons,r=t.aliases||Object.create(null),o=Object.create(null);function i(s){if(e[s])return o[s]=[];if(!(s in o)){o[s]=null;const u=r[s]&&r[s].parent,c=u&&i(u);c&&(o[s]=[u].concat(c))}return o[s]}return(n||Object.keys(e).concat(Object.keys(r))).forEach(i),o}function ne(t,n,e){const r=t.icons,o=t.aliases||Object.create(null);let i={};function s(u){i=ut(r[u]||o[u],i)}return s(n),e.forEach(s),ut(t,i)}function Pt(t,n){const e=[];if(typeof t!="object"||typeof t.icons!="object")return e;t.not_found instanceof Array&&t.not_found.forEach(o=>{n(o,null),e.push(o)});const r=ee(t);for(const o in r){const i=r[o];i&&(n(o,ne(t,o,i)),e.push(o))}return e}const oe={provider:"",aliases:{},not_found:{},...vt};function z(t,n){for(const e in n)if(e in t&&typeof t[e]!=typeof n[e])return!1;return!0}function _t(t){if(typeof t!="object"||t===null)return null;const n=t;if(typeof n.prefix!="string"||!t.icons||typeof t.icons!="object"||!z(t,oe))return null;const e=n.icons;for(const o in e){const i=e[o];if(!o.match(k)||typeof i.body!="string"||!z(i,J))return null}const r=n.aliases||Object.create(null);for(const o in r){const i=r[o],s=i.parent;if(!o.match(k)||typeof s!="string"||!e[s]&&!r[s]||!z(i,J))return null}return n}const Q=Object.create(null);function re(t,n){return{provider:t,prefix:n,icons:Object.create(null),missing:new Set}}function I(t,n){const e=Q[t]||(Q[t]=Object.create(null));return e[n]||(e[n]=re(t,n))}function nt(t,n){return _t(n)?Pt(n,(e,r)=>{r?t.icons[e]=r:t.missing.add(e)}):[]}function ie(t,n,e){try{if(typeof e.body=="string")return t.icons[n]={...e},!0}catch{}return!1}function se(t,n){let e=[];return(typeof t=="string"?[t]:Object.keys(Q)).forEach(o=>{(typeof o=="string"&&typeof n=="string"?[n]:Object.keys(Q[o]||{})).forEach(s=>{const u=I(o,s);e=e.concat(Object.keys(u.icons).map(c=>(o!==""?"@"+o+":":"")+s+":"+c))})}),e}let A=!1;function jt(t){return typeof t=="boolean"&&(A=t),A}function P(t){const n=typeof t=="string"?O(t,!0,A):t;if(n){const e=I(n.provider,n.prefix),r=n.name;return e.icons[r]||(e.missing.has(r)?null:void 0)}}function Ot(t,n){const e=O(t,!0,A);if(!e)return!1;const r=I(e.provider,e.prefix);return ie(r,e.name,n)}function lt(t,n){if(typeof t!="object")return!1;if(typeof n!="string"&&(n=t.provider||""),A&&!n&&!t.prefix){let o=!1;return _t(t)&&(t.prefix="",Pt(t,(i,s)=>{s&&Ot(i,s)&&(o=!0)})),o}const e=t.prefix;if(!F({provider:n,prefix:e,name:"a"}))return!1;const r=I(n,e);return!!nt(r,t)}function ce(t){return!!P(t)}function ue(t){const n=P(t);return n?{...j,...n}:null}function le(t){const n={loaded:[],missing:[],pending:[]},e=Object.create(null);t.sort((o,i)=>o.provider!==i.provider?o.provider.localeCompare(i.provider):o.prefix!==i.prefix?o.prefix.localeCompare(i.prefix):o.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const i=o.provider,s=o.prefix,u=o.name,c=e[i]||(e[i]=Object.create(null)),l=c[s]||(c[s]=I(i,s));let f;u in l.icons?f=n.loaded:s===""||l.missing.has(u)?f=n.missing:f=n.pending;const a={provider:i,prefix:s,name:u};f.push(a)}),n}function Tt(t,n){t.forEach(e=>{const r=e.loaderCallbacks;r&&(e.loaderCallbacks=r.filter(o=>o.id!==n))})}function fe(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const n=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!n.length)return;let e=!1;const r=t.provider,o=t.prefix;n.forEach(i=>{const s=i.icons,u=s.pending.length;s.pending=s.pending.filter(c=>{if(c.prefix!==o)return!0;const l=c.name;if(t.icons[l])s.loaded.push({provider:r,prefix:o,name:l});else if(t.missing.has(l))s.missing.push({provider:r,prefix:o,name:l});else return e=!0,!0;return!1}),s.pending.length!==u&&(e||Tt([t],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let ae=0;function de(t,n,e){const r=ae++,o=Tt.bind(null,e,r);if(!n.pending.length)return o;const i={id:r,icons:n,callback:t,abort:o};return e.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),o}const K=Object.create(null);function ft(t,n){K[t]=n}function W(t){return K[t]||K[""]}function he(t,n=!0,e=!1){const r=[];return t.forEach(o=>{const i=typeof o=="string"?O(o,n,e):o;i&&r.push(i)}),r}var pe={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function ge(t,n,e,r){const o=t.resources.length,i=t.random?Math.floor(Math.random()*o):t.index;let s;if(t.random){let d=t.resources.slice(0);for(s=[];d.length>1;){const w=Math.floor(Math.random()*d.length);s.push(d[w]),d=d.slice(0,w).concat(d.slice(w+1))}s=s.concat(d)}else s=t.resources.slice(i).concat(t.resources.slice(0,i));const u=Date.now();let c="pending",l=0,f,a=null,h=[],p=[];typeof r=="function"&&p.push(r);function g(){a&&(clearTimeout(a),a=null)}function m(){c==="pending"&&(c="aborted"),g(),h.forEach(d=>{d.status==="pending"&&(d.status="aborted")}),h=[]}function q(d,w){w&&(p=[]),typeof d=="function"&&p.push(d)}function T(){return{startTime:u,payload:n,status:c,queriesSent:l,queriesPending:h.length,subscribe:q,abort:m}}function y(){c="failed",p.forEach(d=>{d(void 0,f)})}function b(){h.forEach(d=>{d.status==="pending"&&(d.status="aborted")}),h=[]}function Ht(d,w,C){const E=w!=="success";switch(h=h.filter(x=>x!==d),c){case"pending":break;case"failed":if(E||!t.dataAfterTimeout)return;break;default:return}if(w==="abort"){f=C,y();return}if(E){f=C,h.length||(s.length?V():y());return}if(g(),b(),!t.random){const x=t.resources.indexOf(d.resource);x!==-1&&x!==t.index&&(t.index=x)}c="completed",p.forEach(x=>{x(C)})}function V(){if(c!=="pending")return;g();const d=s.shift();if(d===void 0){if(h.length){a=setTimeout(()=>{g(),c==="pending"&&(b(),y())},t.timeout);return}y();return}const w={status:"pending",resource:d,callback:(C,E)=>{Ht(w,C,E)}};h.push(w),l++,a=setTimeout(V,t.rotate),e(d,n,w.callback)}return setTimeout(V),T}function Et(t){const n={...pe,...t};let e=[];function r(){e=e.filter(u=>u().status==="pending")}function o(u,c,l){const f=ge(n,u,c,(a,h)=>{r(),l&&l(a,h)});return e.push(f),f}function i(u){return e.find(c=>u(c))||null}return{query:o,find:i,setIndex:u=>{n.index=u},getIndex:()=>n.index,cleanup:r}}function ot(t){let n;if(typeof t.resources=="string")n=[t.resources];else if(n=t.resources,!(n instanceof Array)||!n.length)return null;return{resources:n,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const $=Object.create(null),v=["https://api.simplesvg.com","https://api.unisvg.com"],L=[];for(;v.length>0;)v.length===1||Math.random()>.5?L.push(v.shift()):L.push(v.pop());$[""]=ot({resources:["https://api.iconify.design"].concat(L)});function at(t,n){const e=ot(n);return e===null?!1:($[t]=e,!0)}function B(t){return $[t]}function me(){return Object.keys($)}function dt(){}const U=Object.create(null);function ye(t){if(!U[t]){const n=B(t);if(!n)return;const e=Et(n),r={config:n,redundancy:e};U[t]=r}return U[t]}function Mt(t,n,e){let r,o;if(typeof t=="string"){const i=W(t);if(!i)return e(void 0,424),dt;o=i.send;const s=ye(t);s&&(r=s.redundancy)}else{const i=ot(t);if(i){r=Et(i);const s=t.resources?t.resources[0]:"",u=W(s);u&&(o=u.send)}}return!r||!o?(e(void 0,424),dt):r.query(n,o,e)().abort}const ht="iconify2",_="iconify",Nt=_+"-count",pt=_+"-version",Ft=36e5,be=168;function X(t,n){try{return t.getItem(n)}catch{}}function rt(t,n,e){try{return t.setItem(n,e),!0}catch{}}function gt(t,n){try{t.removeItem(n)}catch{}}function Y(t,n){return rt(t,Nt,n.toString())}function Z(t){return parseInt(X(t,Nt))||0}const S={local:!0,session:!0},Lt={local:new Set,session:new Set};let it=!1;function we(t){it=t}let N=typeof window>"u"?{}:window;function Rt(t){const n=t+"Storage";try{if(N&&N[n]&&typeof N[n].length=="number")return N[n]}catch{}S[t]=!1}function Qt(t,n){const e=Rt(t);if(!e)return;const r=X(e,pt);if(r!==ht){if(r){const u=Z(e);for(let c=0;c<u;c++)gt(e,_+c.toString())}rt(e,pt,ht),Y(e,0);return}const o=Math.floor(Date.now()/Ft)-be,i=u=>{const c=_+u.toString(),l=X(e,c);if(typeof l=="string"){try{const f=JSON.parse(l);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>o&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&n(f,u))return!0}catch{}gt(e,c)}};let s=Z(e);for(let u=s-1;u>=0;u--)i(u)||(u===s-1?(s--,Y(e,s)):Lt[t].add(u))}function Dt(){if(!it){we(!0);for(const t in S)Qt(t,n=>{const e=n.data,r=n.provider,o=e.prefix,i=I(r,o);if(!nt(i,e).length)return!1;const s=e.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function Ie(t,n){const e=t.lastModifiedCached;if(e&&e>=n)return e===n;if(t.lastModifiedCached=n,e)for(const r in S)Qt(r,o=>{const i=o.data;return o.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===n});return!0}function xe(t,n){it||Dt();function e(r){let o;if(!S[r]||!(o=Rt(r)))return;const i=Lt[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=Z(o),!Y(o,s+1))return;const u={cached:Math.floor(Date.now()/Ft),provider:t.provider,data:n};return rt(o,_+s.toString(),JSON.stringify(u))}n.lastModified&&!Ie(t,n.lastModified)||!Object.keys(n.icons).length||(n.not_found&&(n=Object.assign({},n),delete n.not_found),e("local")||e("session"))}function mt(){}function Se(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,fe(t)}))}function Ce(t,n){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(n).sort():t.iconsToLoad=n,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:e,prefix:r}=t,o=t.iconsToLoad;delete t.iconsToLoad;let i;if(!o||!(i=W(e)))return;i.prepare(e,r,o).forEach(u=>{Mt(e,u,c=>{if(typeof c!="object")u.icons.forEach(l=>{t.missing.add(l)});else try{const l=nt(t,c);if(!l.length)return;const f=t.pendingIcons;f&&l.forEach(a=>{f.delete(a)}),xe(t,c)}catch(l){console.error(l)}Se(t)})})}))}const st=(t,n)=>{const e=he(t,!0,jt()),r=le(e);if(!r.pending.length){let c=!0;return n&&setTimeout(()=>{c&&n(r.loaded,r.missing,r.pending,mt)}),()=>{c=!1}}const o=Object.create(null),i=[];let s,u;return r.pending.forEach(c=>{const{provider:l,prefix:f}=c;if(f===u&&l===s)return;s=l,u=f,i.push(I(l,f));const a=o[l]||(o[l]=Object.create(null));a[f]||(a[f]=[])}),r.pending.forEach(c=>{const{provider:l,prefix:f,name:a}=c,h=I(l,f),p=h.pendingIcons||(h.pendingIcons=new Set);p.has(a)||(p.add(a),o[l][f].push(a))}),i.forEach(c=>{const{provider:l,prefix:f}=c;o[l][f].length&&Ce(c,o[l][f])}),n?de(n,r,i):mt},ve=t=>new Promise((n,e)=>{const r=typeof t=="string"?O(t,!0):t;if(!r){e(t);return}st([r||t],o=>{if(o.length&&r){const i=P(r);if(i){n({...j,...i});return}}e(t)})});function ke(t){try{const n=typeof t=="string"?JSON.parse(t):t;if(typeof n.body=="string")return{...n}}catch{}}function Ae(t,n){const e=typeof t=="string"?O(t,!0,!0):null;if(!e){const i=ke(t);return{value:t,data:i}}const r=P(e);if(r!==void 0||!e.prefix)return{value:t,name:e,data:r};const o=st([e],()=>n(t,e,P(e)));return{value:t,name:e,loading:o}}function H(t){return t.hasAttribute("inline")}let $t=!1;try{$t=navigator.vendor.indexOf("Apple")===0}catch{}function Pe(t,n){switch(n){case"svg":case"bg":case"mask":return n}return n!=="style"&&($t||t.indexOf("<a")===-1)?"svg":t.indexOf("currentColor")===-1?"bg":"mask"}const _e=/(-?[0-9.]*[0-9]+[0-9.]*)/g,je=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function tt(t,n,e){if(n===1)return t;if(e=e||100,typeof t=="number")return Math.ceil(t*n*e)/e;if(typeof t!="string")return t;const r=t.split(_e);if(r===null||!r.length)return t;const o=[];let i=r.shift(),s=je.test(i);for(;;){if(s){const u=parseFloat(i);isNaN(u)?o.push(i):o.push(Math.ceil(u*n*e)/e)}else o.push(i);if(i=r.shift(),i===void 0)return o.join("");s=!s}}const Oe=t=>t==="unset"||t==="undefined"||t==="none";function Bt(t,n){const e={...j,...t},r={...kt,...n},o={left:e.left,top:e.top,width:e.width,height:e.height};let i=e.body;[e,r].forEach(g=>{const m=[],q=g.hFlip,T=g.vFlip;let y=g.rotate;q?T?y+=2:(m.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),m.push("scale(-1 1)"),o.top=o.left=0):T&&(m.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),m.push("scale(1 -1)"),o.top=o.left=0);let b;switch(y<0&&(y-=Math.floor(y/4)*4),y=y%4,y){case 1:b=o.height/2+o.top,m.unshift("rotate(90 "+b.toString()+" "+b.toString()+")");break;case 2:m.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:b=o.width/2+o.left,m.unshift("rotate(-90 "+b.toString()+" "+b.toString()+")");break}y%2===1&&(o.left!==o.top&&(b=o.left,o.left=o.top,o.top=b),o.width!==o.height&&(b=o.width,o.width=o.height,o.height=b)),m.length&&(i='<g transform="'+m.join(" ")+'">'+i+"</g>")});const s=r.width,u=r.height,c=o.width,l=o.height;let f,a;s===null?(a=u===null?"1em":u==="auto"?l:u,f=tt(a,c/l)):(f=s==="auto"?c:s,a=u===null?tt(f,l/c):u==="auto"?l:u);const h={},p=(g,m)=>{Oe(m)||(h[g]=m.toString())};return p("width",f),p("height",a),h.viewBox=o.left.toString()+" "+o.top.toString()+" "+c.toString()+" "+l.toString(),{attributes:h,body:i}}const Te=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let D=Te();function Ee(t){D=t}function Me(){return D}function Ne(t,n){const e=B(t);if(!e)return 0;let r;if(!e.maxURL)r=0;else{let o=0;e.resources.forEach(s=>{o=Math.max(o,s.length)});const i=n+".json?icons=";r=e.maxURL-o-e.path.length-i.length}return r}function Fe(t){return t===404}const Le=(t,n,e)=>{const r=[],o=Ne(t,n),i="icons";let s={type:i,provider:t,prefix:n,icons:[]},u=0;return e.forEach((c,l)=>{u+=c.length+1,u>=o&&l>0&&(r.push(s),s={type:i,provider:t,prefix:n,icons:[]},u=c.length),s.icons.push(c)}),r.push(s),r};function Re(t){if(typeof t=="string"){const n=B(t);if(n)return n.path}return"/"}const Qe=(t,n,e)=>{if(!D){e("abort",424);return}let r=Re(n.provider);switch(n.type){case"icons":{const i=n.prefix,u=n.icons.join(","),c=new URLSearchParams({icons:u});r+=i+".json?"+c.toString();break}case"custom":{const i=n.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:e("abort",400);return}let o=503;D(t+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{e(Fe(s)?"abort":"next",s)});return}return o=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?e("abort",i):e("next",o)});return}setTimeout(()=>{e("success",i)})}).catch(()=>{e("next",o)})},De={prepare:Le,send:Qe};function yt(t,n){switch(t){case"local":case"session":S[t]=n;break;case"all":for(const e in S)S[e]=n;break}}const G="data-style";let qt="";function $e(t){qt=t}function bt(t,n){let e=Array.from(t.childNodes).find(r=>r.hasAttribute&&r.hasAttribute(G));e||(e=document.createElement("style"),e.setAttribute(G,G),t.appendChild(e)),e.textContent=":host{display:inline-block;vertical-align:"+(n?"-0.125em":"0")+"}span,svg{display:block}"+qt}function Vt(){ft("",De),jt(!0);let t;try{t=window}catch{}if(t){if(Dt(),t.IconifyPreload!==void 0){const e=t.IconifyPreload,r="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(o=>{try{(typeof o!="object"||o===null||o instanceof Array||typeof o.icons!="object"||typeof o.prefix!="string"||!lt(o))&&console.error(r)}catch{console.error(r)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(const r in e){const o="IconifyProviders["+r+"] is invalid.";try{const i=e[r];if(typeof i!="object"||!i||i.resources===void 0)continue;at(r,i)||console.error(o)}catch{console.error(o)}}}}return{enableCache:e=>yt(e,!0),disableCache:e=>yt(e,!1),iconExists:ce,getIcon:ue,listIcons:se,addIcon:Ot,addCollection:lt,calculateSize:tt,buildIcon:Bt,loadIcons:st,loadIcon:ve,addAPIProvider:at,appendCustomStyle:$e,_api:{getAPIConfig:B,setAPIModule:ft,sendAPIQuery:Mt,setFetch:Ee,getFetch:Me,listAPIProviders:me}}}function zt(t,n){let e=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in n)e+=" "+r+'="'+n[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+e+">"+t+"</svg>"}function Be(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function qe(t){return'url("data:image/svg+xml,'+Be(t)+'")'}const et={"background-color":"currentColor"},Ut={"background-color":"transparent"},wt={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},It={"-webkit-mask":et,mask:et,background:Ut};for(const t in It){const n=It[t];for(const e in wt)n[t+"-"+e]=wt[e]}function xt(t){return t?t+(t.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Ve(t,n,e){const r=document.createElement("span");let o=t.body;o.indexOf("<a")!==-1&&(o+="<!-- "+Date.now()+" -->");const i=t.attributes,s=zt(o,{...i,width:n.width+"",height:n.height+""}),u=qe(s),c=r.style,l={"--svg":u,width:xt(i.width),height:xt(i.height),...e?et:Ut};for(const f in l)c.setProperty(f,l[f]);return r}function ze(t){const n=document.createElement("span"),e=t.attributes;let r="";return e.width||(r="width: inherit;"),e.height||(r+="height: inherit;"),r&&(e.style=r),n.innerHTML=zt(t.body,e),n.firstChild}function St(t,n){const e=n.icon.data,r=n.customisations,o=Bt(e,r);r.preserveAspectRatio&&(o.attributes.preserveAspectRatio=r.preserveAspectRatio);const i=n.renderedMode;let s;switch(i){case"svg":s=ze(o);break;default:s=Ve(o,{...j,...e},i==="mask")}const u=Array.from(t.childNodes).find(c=>{const l=c.tagName&&c.tagName.toUpperCase();return l==="SPAN"||l==="SVG"});u?s.tagName==="SPAN"&&u.tagName===s.tagName?u.setAttribute("style",s.getAttribute("style")):t.replaceChild(s,u):t.appendChild(s)}function Ct(t,n,e){const r=e&&(e.rendered?e:e.lastRender);return{rendered:!1,inline:n,icon:t,lastRender:r}}function Ue(t="iconify-icon"){let n,e;try{n=window.customElements,e=window.HTMLElement}catch{return}if(!n||!e)return;const r=n.get(t);if(r)return r;const o=["icon","mode","inline","width","height","rotate","flip"],i=class extends e{constructor(){super();M(this,"_shadowRoot");M(this,"_state");M(this,"_checkQueued",!1);const c=this._shadowRoot=this.attachShadow({mode:"open"}),l=H(this);bt(c,l),this._state=Ct({value:""},l),this._queueCheck()}static get observedAttributes(){return o.slice(0)}attributeChangedCallback(c){if(c==="inline"){const l=H(this),f=this._state;l!==f.inline&&(f.inline=l,bt(this._shadowRoot,l))}else this._queueCheck()}get icon(){const c=this.getAttribute("icon");if(c&&c.slice(0,1)==="{")try{return JSON.parse(c)}catch{}return c}set icon(c){typeof c=="object"&&(c=JSON.stringify(c)),this.setAttribute("icon",c)}get inline(){return H(this)}set inline(c){c?this.setAttribute("inline","true"):this.removeAttribute("inline")}restartAnimation(){const c=this._state;if(c.rendered){const l=this._shadowRoot;if(c.renderedMode==="svg")try{l.lastChild.setCurrentTime(0);return}catch{}St(l,c)}}get status(){const c=this._state;return c.rendered?"rendered":c.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const c=this._state,l=this.getAttribute("icon");if(l!==c.icon.value){this._iconChanged(l);return}if(!c.rendered)return;const f=this.getAttribute("mode"),a=ct(this);(c.attrMode!==f||Zt(c.customisations,a))&&this._renderIcon(c.icon,a,f)}_iconChanged(c){const l=Ae(c,(f,a,h)=>{const p=this._state;if(p.rendered||this.getAttribute("icon")!==f)return;const g={value:f,name:a,data:h};g.data?this._gotIconData(g):p.icon=g});l.data?this._gotIconData(l):this._state=Ct(l,this._state.inline,this._state)}_gotIconData(c){this._checkQueued=!1,this._renderIcon(c,ct(this),this.getAttribute("mode"))}_renderIcon(c,l,f){const a=Pe(c.data.body,f),h=this._state.inline;St(this._shadowRoot,this._state={rendered:!0,icon:c,inline:h,customisations:l,attrMode:f,renderedMode:a})}};o.forEach(u=>{u in i.prototype||Object.defineProperty(i.prototype,u,{get:function(){return this.getAttribute(u)},set:function(c){c!==null?this.setAttribute(u,c):this.removeAttribute(u)}})});const s=Vt();for(const u in s)i[u]=i.prototype[u]=s[u];return n.define(t,i),i}Ue()||Vt();console.log("Kiera theme common.");
