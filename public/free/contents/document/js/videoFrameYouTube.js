const videoFrameYouTubeElements = document.getElementsByClassName('videoFrameYouTube');

for (let i = 0; i < videoFrameYouTubeElements.length; i++) {
    const url = videoFrameYouTubeElements[i].getAttribute('url');
    const ratio = videoFrameYouTubeElements[i].getAttribute('ratio');

    videoFrameYouTubeElements[i].innerHTML = `<iframe src="https://www.youtube.com/embed/${url}"></iframe>`;

    if (ratio) videoFrameYouTubeElements[i].style.paddingBottom = `${ratio}%`;
}
