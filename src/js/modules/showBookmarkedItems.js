"use strict"

const arrOfItems = Object.values(localStorage);

export function showBookmarkedItems (){
    const bookmarkedIcon = document.querySelector(".Bookmarked");
    bookmarkedIcon.addEventListener("click", ()=>{
        const page_content = document.querySelector(".page-content")
        page_content.innerHTML='';
        const title = document.createElement('h1');
        title.innerText = "Bookmarked Movies";
        page_content.appendChild(title);
        
        for(let i=0; i<arrOfItems.length; i++){
            console.log(JSON.parse(arrOfItems[i]));
        }

    })
}