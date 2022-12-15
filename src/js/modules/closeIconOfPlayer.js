"use strict"

export function closeIconOfPlayer(EO){
    const item = EO.target.querySelector('.items-item');
    const videoPlayer = item.querySelector('.items-video');
    item.removeChild(videoPlayer);
}