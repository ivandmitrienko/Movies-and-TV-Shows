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
    result.forEach((item) => {
        let trendingItem = document.createElement('div');
        trendingItem.className = 'trending-items__item';
        trendingItem.style.background = `url(${item.image}) 0 0/470px 230px no-repeat`;
        let trendingItemBookmark = document.createElement('div');
        trendingItemBookmark.className = 'trending-items__item-bookmarket';
        trendingItemBookmark.innerHTML = `<svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.3866 0C15.5893 0 15.7832 0.0396563 15.9683 0.118969C16.2591 0.233532 16.4904 0.414188 16.6623 0.660939C16.8341 0.907689 16.92 1.18088 16.92 1.4805V18.5195C16.92 18.8191 16.8341 19.0923 16.6623 19.3391C16.4904 19.5858 16.2591 19.7665 15.9683 19.881C15.8008 19.9515 15.607 19.9868 15.3866 19.9868C14.9636 19.9868 14.5979 19.8458 14.2895 19.5638L8.46001 13.959L2.63054 19.5638C2.31328 19.8546 1.94757 20 1.53338 20C1.33069 20 1.13681 19.9603 0.951751 19.881C0.660939 19.7665 0.42961 19.5858 0.257766 19.3391C0.085922 19.0923 0 18.8191 0 18.5195V1.4805C0 1.18088 0.085922 0.907689 0.257766 0.660939C0.42961 0.414188 0.660939 0.233532 0.951751 0.118969C1.13681 0.0396563 1.33069 0 1.53338 0H15.3866Z" fill="#5A698F"/>
        </svg>`;
        // let trendingItemBookmarkIcon = `<svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        //     <path d="M15.3866 0C15.5893 0 15.7832 0.0396563 15.9683 0.118969C16.2591 0.233532 16.4904 0.414188 16.6623 0.660939C16.8341 0.907689 16.92 1.18088 16.92 1.4805V18.5195C16.92 18.8191 16.8341 19.0923 16.6623 19.3391C16.4904 19.5858 16.2591 19.7665 15.9683 19.881C15.8008 19.9515 15.607 19.9868 15.3866 19.9868C14.9636 19.9868 14.5979 19.8458 14.2895 19.5638L8.46001 13.959L2.63054 19.5638C2.31328 19.8546 1.94757 20 1.53338 20C1.33069 20 1.13681 19.9603 0.951751 19.881C0.660939 19.7665 0.42961 19.5858 0.257766 19.3391C0.085922 19.0923 0 18.8191 0 18.5195V1.4805C0 1.18088 0.085922 0.907689 0.257766 0.660939C0.42961 0.414188 0.660939 0.233532 0.951751 0.118969C1.13681 0.0396563 1.33069 0 1.53338 0H15.3866Z" fill="#5A698F" />
        // </svg>}`;
        trendingItem.appendChild(trendingItemBookmark);
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