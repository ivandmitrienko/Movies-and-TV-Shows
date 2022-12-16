"use strict"

export function showVideo(i){
    console.log(i.video)
    const content = document.querySelector('.content');
    const videoContainer = document.createElement('div');
    videoContainer.className=('content-video');
    const video = document.createElement('iframe');
    video.setAttribute('src', `${i.video}`);
    videoContainer.appendChild(video);
    content.appendChild( videoContainer);
}