import{a as d,S as g,i as a}from"./assets/vendor-BAvAuoY_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",p="53020788-f0e72ace7309c782074e3a3d3";function y(n){const r={key:p,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(h,{params:r}).then(i=>i.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new g(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function b(n){const r=n.map(({largeImageURL:i,webformatURL:o,tags:e,likes:t,views:s,comments:f,downloads:m})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${i}">
         <img class="gallery-img" src="${o}" alt="${e}" " loading="lazy" />
        </a>
    
        <ul class="info">
          <li>Likes: ${t}</li>
          <li>Views: ${s}</li>
          <li>Comments: ${f}</li>
          <li>Downloads: ${m}</li>
        </ul>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),L.refresh()}function w(){c.innerHTML=""}function S(){u.classList.remove("hidden")}function P(){u.classList.add("hidden")}const l=document.querySelector(".form"),q=l.elements["search-text"];l.addEventListener("submit",n=>{n.preventDefault();const r=q.value.trim();if(!r){a.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}w(),S(),y(r).then(i=>{const o=Array.isArray(i==null?void 0:i.hits)?i.hits:[];if(o.length===0){a.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o)}).catch(()=>{a.error({title:"Error",message:"Something went wrong while fetching images.",position:"topRight"})}).finally(()=>{P(),l.reset()})});
//# sourceMappingURL=index.js.map
