import { BEfunction } from "./BEfunction.js";

export function contentOfPage() {
    // const keyBE = history.state.firstKey;
    const keyBE = "trending"; // for dev first key from history
    const titleBE = "trending" // for dev second key from history
    const allContentBE = "recommended"; // for dev first key from history
    const titleContentBE = "recommended for you"; // for dev second key from history
    const mainContent = document.getElementById('mainContent');
    const page = document.createElement('div');
    page.className = 'page';
    mainContent.appendChild(page);

    const page_content = document.createElement('div');
    page_content.className = 'page-content';
    page.appendChild(page_content);

    BEfunction(keyBE, titleBE, page_content);

    if(allContentBE) {
        BEfunction(allContentBE, titleContentBE, page_content);
    }

    return mainContent;
}

contentOfPage();