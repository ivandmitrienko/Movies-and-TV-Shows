"use strict"

import { contentOfPage } from "./contentOfPage.js";

export const newPage = (firstKey, secondKey, secondKeyTitle, UrlPage) => {
    history.pushState(
        {
            firstKey,
            secondKey,
            secondKeyTitle

        },
        '',
        UrlPage
    );
    contentOfPage();
}