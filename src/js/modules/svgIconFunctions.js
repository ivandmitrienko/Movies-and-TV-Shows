"use strict"

import { newPage } from "./history.js";

export function svgFunc() {
    const homeIcon = document.querySelector('.home');
    homeIcon.addEventListener("click", () => newPage("trending", "recommended", "recommended for you"))
    const movieIcon = document.querySelector('.movie');
    movieIcon.addEventListener("click", () => newPage(null, "movies", "movies"))
}