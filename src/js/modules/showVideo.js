"use strict"

export function showVideo(i){
    const content = document.querySelector('.content');
    const videoContainer = document.createElement('div');
    videoContainer.className=('content-video');
    const closerVideoOfContainer = document.createElement('div');
    closerVideoOfContainer.className = ('content-video__closer');
    closerVideoOfContainer.innerHTML = "X";
    videoContainer.appendChild(closerVideoOfContainer);
    closerVideoOfContainer.addEventListener('click', ()=>{
        content.removeChild(videoContainer);

    })
    const video = document.createElement('iframe');
    video.setAttribute('src', `${i.video}`);
    videoContainer.appendChild(video);
    content.appendChild( videoContainer);
}