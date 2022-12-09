"use strict"

import { showItemsBE } from "./showItemsBE.js";

export function BEfunction(keyBE, titleBE, page_content) {
    const title = document.createElement('h1');
    title.innerText = titleBE;
    page_content.appendChild(title);
    const items = document.createElement('div');
    items.className = 'items';
    items.classList.add(`items--${keyBE}`);
    page_content.appendChild(items);

    const getItemsBE = () => {
        fetch(`http://localhost:3001/${keyBE}`)
            .then(res => res.json())
            .then(data => showItemsBE(data, items))
    };

    getItemsBE();
}