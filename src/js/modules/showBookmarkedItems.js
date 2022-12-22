"use strict"

import { searchBookmarkedItems } from "./searchBookmarkedItems.js";

export function showBookmarkedItems() {
    const bookmarkedIcon = document.querySelector(".Bookmarked");
    bookmarkedIcon.addEventListener("click", () => searchBookmarkedItems());
}