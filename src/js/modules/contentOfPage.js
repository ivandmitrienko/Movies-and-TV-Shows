"use strict"

import { svgFunc } from './svgIconFunctions.js';
import { BEfunction } from "./BEfunction.js";
import { showBookmarkedItems } from './showBookmarkedItems.js';

export function contentOfPage() { 
    // const keyBE = history.state.firstKey;
    // const titleBE = keyBE;
    const keyBE = "trending";//del
    const titleBE = "trending";//del
    // const allContentBE = history.state.secondKey; 
    const allContentBE = "recommended"; //del
    // const titleContentBE = history.state.secondKeyTitle;
    const titleContentBE =  "recommended for you"; //del
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = '';
    const page = document.createElement('div');
    page.className = 'page';
    mainContent.appendChild(page);
    const page_content = document.createElement('div');
    page_content.className = 'page-content';
    page.appendChild(page_content); 
    svgFunc(); // in authentification
    showBookmarkedItems(); // in authentification


    if (keyBE) {
        BEfunction(keyBE, titleBE, page_content)
    };
    
    if (allContentBE) {
        BEfunction(allContentBE, titleContentBE, page_content);
    };

    return mainContent;
}

contentOfPage();
