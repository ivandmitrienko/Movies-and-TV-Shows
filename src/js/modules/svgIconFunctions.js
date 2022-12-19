"use strict"

import { newPage } from "./history.js";
import { showBookmarkedItems } from './showBookmarkedItems.js';

export function svgFunc() {
    const homeIcon = document.querySelector('.home');
    homeIcon.addEventListener("click", () => newPage("trending", "recommended", "recommended for you", "home"))
    const movieIcon = document.querySelector('.movie');
    movieIcon.addEventListener("click", () => newPage(null, "movies", "movies", "movies"));
    const TVseries = document.querySelector('.TVseries');
    TVseries.addEventListener("click", () => newPage(null, "TVseries", "TV Series", "TVseries"));
}