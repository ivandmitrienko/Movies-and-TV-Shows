"use strict"

import { contentOfPage } from './contentOfPage.js';

export const newPage = (firstKey, secondKey, secondKeyTitle) => {
    history.pushState(
        {
            firstKey,
            secondKey,
            secondKeyTitle

        },
        '',
        'movies'
    );
    contentOfPage();
}