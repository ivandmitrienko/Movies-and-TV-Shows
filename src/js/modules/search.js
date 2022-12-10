"use strict"
import { showItemsBE } from "./showItemsBE.js";
const s = document.querySelector(".content-search");
const searcher = s.querySelector("input");

searcher.addEventListener("keydown", (EO) => {
    if (EO.keyCode === 13) {
        const searcherValue = searcher.value;
        const page_content = document.querySelector(".page-content")
        page_content.innerHTML = '';
        const title = document.createElement('h1');
        page_content.appendChild(title);
        const items = document.createElement('div');
        items.className = 'items';
        items.classList.add(`items--searched`);
        page_content.appendChild(items);
        const getItemsBE = () => {
            fetch(`http://localhost:3001/recommended?title_like=${searcherValue}`)
                .then(res => res.json())
                .then(data => f(data, searcherValue, title, items))
        };

        getItemsBE();

        function f(data, searcherValue, title, items){
            title.innerText = `Found ${data.length} results for \‘${searcherValue}\’`;
                showItemsBE(data, items);
        }  
    }  
})