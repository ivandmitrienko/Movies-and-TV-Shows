"use strict"

let offset = 0;

export function slider(goTo) {
    const items = document.querySelector('.items--trending');
    const nextButton = document.querySelector('.items__nextButton');
    const prevButton = document.querySelector('.items__prevButton');

    if (goTo) {
        if(offset===0){
            return;
        }
        if(offset===-515){
            prevButton.style.opacity = "0";
        }
        offset += 515;
        items.style.left = offset + 'px';
        if (offset === -515) {
            nextButton.style.opacity = "1";
        }
    } else {
        if (offset === -1030){
            return;
        }
        offset -= 515;
        items.style.left = offset + 'px';
        prevButton.style.opacity = "1"
        if (offset === -1030) {
            nextButton.style.opacity = "0";
        }
    }
}
