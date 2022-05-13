const videoLinkYouTubeElements = document.getElementsByClassName('videoLinkYouTube');

for (let i = 0; i < videoLinkYouTubeElements.length; i++) {
    const url = videoLinkYouTubeElements[i].getAttribute('url');
    const ratio = videoLinkYouTubeElements[i].getAttribute('ratio');

    videoLinkYouTubeElements[i].innerHTML = `
        <div class="explanation">Click to play on YouTube</div>
        <img src="http://img.youtube.com/vi/${url}/maxresdefault.jpg" alt="YouTube Thumbnail" />
    `;
    videoLinkYouTubeElements[i].href = `https://youtu.be/${url}`;
    videoLinkYouTubeElements[i].target = '_blank';
    videoLinkYouTubeElements[i].rel = 'noreferrer';

    if (ratio) videoLinkYouTubeElements[i].style.paddingBottom = `${ratio}%`;
}
