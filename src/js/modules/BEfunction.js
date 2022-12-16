"use strict"

import { showItemsBE } from "./showItemsBE.js";

export function BEfunction(keyBE, titleBE, page_content) {
    const title = document.createElement('h1');
    title.innerText = titleBE;
    page_content.appendChild(title);
    const items = document.createElement('div');
    items.className = 'items';
    items.classList.add(`items--${keyBE}`);
    if(keyBE==='trending'){
       const nextButton = document.createElement('div');
       nextButton.className=('items__nextButton');
       nextButton.innerHTML = `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
       <circle cx="28" cy="28" r="28" fill="white"/>
       <path d="M24 20L32 28L24 36" stroke="#1D2026" stroke-width="3"/>
       </svg>`;
       items.appendChild(nextButton);
       const prevButton = document.createElement('div');
       prevButton.className=('items__prevButton');
       prevButton.innerHTML = `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
       <circle cx="28" cy="28" r="28" fill="white"/>
       <path d="M24 20L32 28L24 36" stroke="#1D2026" stroke-width="3"/>
       </svg>`;
       items.appendChild(prevButton);
    }
    page_content.appendChild(items);

    const getItemsBE = () => {
        fetch(`http://localhost:3001/${keyBE}`)
            .then(res => res.json())
            .then(data => showItemsBE(data, items))
    };

    getItemsBE();
}