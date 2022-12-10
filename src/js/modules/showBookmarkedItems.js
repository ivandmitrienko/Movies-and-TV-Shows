"use strict"

import { showItemsBE } from "./showItemsBE.js";

export function showBookmarkedItems() {
    const arrOfBookmarkedItems = Object.values(localStorage);
    const arrOfItems = [];
    for (let i = 0; i < arrOfBookmarkedItems.length; i++) {
        arrOfItems.push(JSON.parse(arrOfBookmarkedItems[i]));
    }
    const bookmarkedIcon = document.querySelector(".Bookmarked");
    bookmarkedIcon.addEventListener("click", () => {
        const page_content = document.querySelector(".page-content")
        page_content.innerHTML = '';
        const arrOfMovie = arrOfItems.filter((i) => i.category === "Movie");
        const arrOfTVSeries = arrOfItems.filter((i) => i.category === "TV Series");
        if (arrOfMovie.length) {
            const title = document.createElement('h1');
            title.innerText = "Bookmarked Movies";
            page_content.appendChild(title);
            const items = document.createElement('div');
            items.className = 'items';
            items.classList.add(`items--bookmarked`);
            page_content.appendChild(items);
            showItemsBE(arrOfMovie, items);
        }
        if (arrOfTVSeries.length) {
            const title = document.createElement('h1');
            title.innerText = "Bookmarked TV Series";
            page_content.appendChild(title);
            const items = document.createElement('div');
            items.className = 'items';
            items.classList.add(`items--bookmarked`);
            page_content.appendChild(items);
            showItemsBE(arrOfTVSeries, items);
        }
    })
}