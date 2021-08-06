const username = `gschincariol`
const RSSUrl = `https://medium.com/feed/@${username}`;
const RSSConverter = `https://api.rss2json.com/v1/api.json?rss_url=${RSSUrl}`;

const $author = document.querySelector('title');
const $carousel = document.querySelector('.mediumCarousel');

const getMediumData = async () => {
    
    try {
    const response = await fetch(RSSConverter);
    const data = await response.json();
    console.log(data);
    return data
    } catch(error){
        console.log(error)
    }
};

const getAuthor = async () => {
    const data = await getMediumData();
    const author = data.feed.title;
    $author.textContent = author;
};

const makeCarousel = async () => {
    const data = await getMediumData();
    const posts = data.items;

    for (let i = 0; i < posts.length; i++){
        const image = posts[i].thumbnail;
        const title = posts[i].title.toUpperCase();
        const pubDate = posts[i].pubDate;
        const carouselItem = document.createElement('div');
        const link = posts[i].link;
        const isActive = () => {
            return (i === 0 ? "active" : "");
        }

        carouselItem.className = `carousel-item ${isActive()}`;
        carouselItem.innerHTML = `
        <img src="${image}" class="d-block mediumImg img-fluid" alt="">
        <div class="carousel-caption d-none d-md-block bg-secondary bg-opacity-75 p-2 w-auto">
          <h5><a class="text-warning" href="${link}">${title}</a></h5>
          <p class="text-white">Published: ${pubDate}</p>
        </div>`;

        $carousel.appendChild(carouselItem);
    }


};

getAuthor();
makeCarousel();

