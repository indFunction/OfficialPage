const imageLinkElements = document.getElementsByClassName('imageLink');

for (let i = 0; i < imageLinkElements.length; i++) {
    const href = imageLinkElements[i].href;
    const src = imageLinkElements[i].getAttribute('src');
    const ratio = imageLinkElements[i].getAttribute('ratio');

    imageLinkElements[i].innerHTML = `
        <div class="explanation">Click to move ${href}</div>
        <img src="${src}" alt="Link Thumbnail" />
    `;
    imageLinkElements[i].target = '_blank';
    imageLinkElements[i].rel = 'noreferrer';

    if (ratio) imageLinkElements[i].style.paddingBottom = `${ratio}%`;
}
