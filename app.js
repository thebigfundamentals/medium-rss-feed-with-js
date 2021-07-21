const username = `gschincariol`
const RSSUrl = `https://medium.com/feed/@${username}`;
const RSSConverter = `https://api.rss2json.com/v1/api.json?rss_url=${RSSUrl}`;

const $text = document.querySelector('.text');
const $textList = document.querySelector('.textList');

export const getMediumData = async () => {
    
    try {
    const response = await fetch(RSSConverter);
    const data = await response.json();
    console.log(data);
    return data
    } catch(error){
        console.log(error)
    }
};

const getSingleText = async () => {
    const posts = await getMediumData();
    const post = posts.items[1]; // latest text (0 to 9)
    const title = post.title;
    const pubDate = post.pubDate;
    const link = post.link;
    const author = post.author;
    const content = post.content;

    const newText = document.createElement('div');
    newText.className = 'text';
    newText.innerHTML = `<h1>${title}</h1>
    <a href="${link}"><h2>Published ${pubDate} by ${author}</h2></a>
    ${content}`;

    $text.appendChild(newText)
};

const getLatestTextsList = async () => {
    const posts = await getMediumData();
    for (let post of posts.items){
        const newItem = document.createElement('li');
        const title = post.title;
        const link = post.link;
        const thumbnail = post.thumbnail;

        newItem.innerHTML = `<img src="${thumbnail}" alt=""><a href="${link}"><h3>${title}</h3></a>`;

        $textList.appendChild(newItem)

    }
};

const getMediumTitles = async () => {
    const posts = await getMediumData();
    for (let post of posts.items){
        console.log(post.title)
    }
};

const getMediumLinks = async () => {
    const posts = await getMediumData();
    for (let post of posts.items){
        console.log(post.link)
    }
};

const getMediumThumbnails = async () => {
    const posts = await getMediumData();
    for (let post of posts.items){
        console.log(post.thumbnail)
    }
};

const getMediumPubDates = async () => {
    const posts = await getMediumData();
    for (let post of posts.items){
        console.log(post.pubDate)
    }
};

const getMediumTexts = async () => {
    const posts = await getMediumData();
    for (let post of posts.items){
        console.log(post.content)
    }
};