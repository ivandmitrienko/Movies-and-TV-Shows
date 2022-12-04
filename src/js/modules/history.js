"use strict"

import { contentOfPage } from './contentOfPage.js';

export const newPage = (firstKey, secondKey, secondKeyTitle, UrlPage) => {
    history.replaceState(
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