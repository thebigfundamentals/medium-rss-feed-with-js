import { getMediumData } from "./app.js";

const $cards = document.querySelector('.cards');
const $header = document.querySelector('.header');

getMediumData()

const getTextToCard = async () => {
    const posts = await getMediumData();
    for (let post of posts.items){
        const newItem = document.createElement('col');
        newItem.className = 'col';
        
        const title = post.title;
        const link = post.link;
        const thumbnail = post.thumbnail;
        const pubDate = post.pubDate;
        const author = post.author;

        newItem.innerHTML = `<div class="card">
        <img src="${thumbnail}" class="card-img-top" alt="Medium Text Thumbnail">
        <div class="card-body">
          <a href="${link}"><h5 class="card-title">${title.toUpperCase()}</h5></a>
          <p class="card-text">Published by ${author} in ${pubDate}</p>
        </div>
      </div>`;

        $cards.appendChild(newItem)

    }
};

const getFeedTitle = async () => {
    const data = await getMediumData();
    $header.textContent = `${data.feed.title}`;
}

getFeedTitle();
getTextToCard();