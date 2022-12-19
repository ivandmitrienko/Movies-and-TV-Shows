"use strict"

import { showItemsBE } from "./showItemsBE.js";
import { slider } from "./slider.js";

export function BEfunction(keyBE, titleBE, page_content) {
    const title = document.createElement('h1');
    title.innerText = titleBE;
    page_content.appendChild(title);
    const items = document.createElement('div');
    items.className = 'items';
    items.classList.add(`items--${keyBE}`);
    if(keyBE==='trending'){
       const next = document.createElement('div');
       next.className=('items__nextButton');
       next.innerHTML = `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
       <circle cx="28" cy="28" r="28" fill="white"/>
       <path d="M24 20L32 28L24 36" stroke="#1D2026" stroke-width="3"/>
       </svg>`;
       next.addEventListener("click", ()=>{
        slider();
       })
       page_content.appendChild(next);
       const prev = document.createElement('div');
       prev.className=('items__prevButton');
       prev.innerHTML = `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
       <circle cx="28" cy="28" r="28" fill="white"/>
       <path d="M24 20L32 28L24 36" stroke="#1D2026" stroke-width="3"/>
       </svg>`;
       prev.addEventListener("click", ()=>{
        slider('next');
       })
       page_content.appendChild(prev);
    }
    page_content.appendChild(items);

    const getItemsBE = () => {
        fetch(`http://localhost:3001/${keyBE}`)
            .then(res => res.json())
            .then(data => showItemsBE(data, items))
    };

    getItemsBE();
}