"use strict"

import { BEfunction } from "./BEfunction.js";

export function contentOfPage() { 
    const keyBE = history.state.firstKey;
    const titleBE = keyBE;
    const allContentBE = history.state.secondKey; 
    const titleContentBE = history.state.secondKeyTitle; 
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = '';
    const page = document.createElement('div');
    page.className = 'page';
    mainContent.appendChild(page);

    const page_content = document.createElement('div');
    page_content.className = 'page-content';
    page.appendChild(page_content);

    if (keyBE) {
        BEfunction(keyBE, titleBE, page_content)
    };
    
    if (allContentBE) {
        BEfunction(allContentBE, titleContentBE, page_content)
    };

    return mainContent;
}
