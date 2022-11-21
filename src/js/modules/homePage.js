'use strict'

const content = document.getElementById('content-video');
const homePage = document.createElement('div');
homePage.className = 'homePage';
content.appendChild(homePage);

const trending = document.createElement('div');
trending.className = 'trending';
homePage.appendChild(trending);
const trendingTitle = document.createElement('h1');
trendingTitle.innerText = 'Trending'
trending.appendChild(trendingTitle);
const trendingItems = document.createElement('div');
trendingItems.className = 'trending-items';
trending.appendChild(trendingItems);

function getTrendingItemsBE(result) {
    result.forEach((item)=>{
        let trendingItem = document.createElement('div');
        trendingItem.className = 'trending-items__item'; 
        trendingItem.style.backgroundImage = `url(${item.image})`;
        return trendingItems.appendChild(trendingItem);
    })
}

const trendingItemsBE = () => {
    fetch(`http://localhost:3001/trending`)
        .then(res => res.json())
        .then(data => getTrendingItemsBE(data))
};

trendingItemsBE();




// console.log(resultTrendingBE);






// onclick="{
//     fetch(`http://localhost:3001/trending`)
//     .then(res => res.json())
//     .then(data => console.log(data));

// }"