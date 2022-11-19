'use strict'

const content = document.getElementById('content-video');
const homePage = document.createElement('div');
homePage.className = 'homePage';
const trending = document.createElement('div');
trending.className = 'trending';


content.appendChild(homePage);






// onclick="{
//     fetch(`http://localhost:3001/trending`)
//     .then(res => res.json())
//     .then(data => console.log(data));

// }"