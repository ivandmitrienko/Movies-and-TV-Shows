"use strict"

export function showIconOfPlayer(EO) {
    const videoPlayer = document.createElement('div');
    videoPlayer.className = ('items-video');
    const videoPlayerIcon = document.createElement('div');
    videoPlayerIcon.className = ('items-video__icon');
    videoPlayerIcon.innerHTML = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.7125 6.7125 0 15 0C23.2875 0 30 6.7125 30 15C30 23.2875 23.2875 30 15 30C6.7125 30 0 23.2875 0 15ZM21 14.5L12 8V21L21 14.5Z" fill="white"/>
    </svg> Play`;
    videoPlayer.appendChild(videoPlayerIcon);
    const item = EO.target.querySelector('.items-item');
    item.appendChild(videoPlayer);
}