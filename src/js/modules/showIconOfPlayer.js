"use strict"

export function showIconOfPlayer(EO) {
    const videoPlayer = document.createElement('div');
    videoPlayer.className = ('items-video');
    const videoPlayerIcon = document.createElement('div');
    videoPlayerIcon.className = ('items-video__icon');
    videoPlayer.appendChild(videoPlayerIcon);
    const item = EO.target.querySelector('.items-item');
    item.appendChild(videoPlayer);
}