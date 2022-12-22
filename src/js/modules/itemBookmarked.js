"use strict"

import { contentOfPage } from './contentOfPage.js';

export function itemBookmarked(el) {
    const arrKeyFromStorage = Object.keys(localStorage);
    if (arrKeyFromStorage.find(i => i == el.id)) {
        delete localStorage[el.id];
    } else localStorage.setItem(el.id, JSON.stringify(el));
    contentOfPage();
}