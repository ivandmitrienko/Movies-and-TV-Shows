"use strict"

import { contentOfPage } from "./contentOfPage.js";

export function showBookmarkedItems (){
    const bookmarkedIcon = document.querySelector(".Bookmarked");
    bookmarkedIcon.addEventListener("click", ()=>{
        contentOfPage();
        const page_content = document.querySelector(".page-content")
        const title = document.createElement('h1');
        title.innerText = "Bookmarked Movies";
        page_content.appendChild(title);
        let arrer = Object.values(localStorage);
        for(let i=0; i<arrer.length; i++){
            console.log(arrer[i]);
        }

    })
}