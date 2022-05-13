const pictureGalleryElements = document.getElementsByClassName('pictureGallery');
let pictureGallerySlideNum = [];

for (let i = 0; i < pictureGalleryElements.length; i++) {
    const data = pictureGalleryElements[i].getAttribute('data').split(',');
    const useBorder = pictureGalleryElements[i].getAttribute('useBorder');
    const isSlide = pictureGalleryElements[i].getAttribute('isSlide');

    let pictureElement = '';
    if (data.length > 1) {
        if (isSlide) {
            pictureGallerySlideNum[i] = 0;

            pictureElement = `
                <div class="slideContainer">
                    <button onclick='changePictureIndex(${i}, -1, ${data.length})'>&lt;</button>
                    <a class="singlePictureContainer" href="${data[pictureGallerySlideNum[i]]}">
                        <img class="${useBorder ? 'picture border' : 'picture'}" src="${data[pictureGallerySlideNum[i]]}">
                    </a>
                    <button onclick='changePictureIndex(${i}, 1, ${data.length})'>&gt;</button>
                </div>
            `;
        } else {
            pictureGallerySlideNum[i] = -1;

            pictureElement = data.map((item) => (
                `
                    <a class="multiPictureContainer" href="${item}">
                        <img class="${useBorder ? 'picture border' : 'picture'}" src="${item}">
                    </a>
                `
            )).join('');
        }
    } else {
        pictureGallerySlideNum[i] = -1;

        pictureElement = `
            <a class="singlePictureContainer" href="${data[0]}">
                <img class="${useBorder ? 'picture border' : 'picture'}" src=${data[0]} />
            </a>
        `;
    }

    pictureGalleryElements[i].innerHTML = `
        <div class="container">
            ${pictureElement}
        </div>
    `;
}

function changePictureIndex(i, n, max) {
    if (n > 0 && pictureGallerySlideNum[i] + n < max) {
        pictureGallerySlideNum[i] = pictureGallerySlideNum[i] + n;
    } else if (n < 0 && pictureGallerySlideNum[i] + n >= 0) {
        pictureGallerySlideNum[i] = pictureGallerySlideNum[i] + n;
    }

    pictureGalleryElements[i].innerHTML = redrawSlideContainer(i);
}

function redrawSlideContainer(i) {
    const data = pictureGalleryElements[i].getAttribute('data').split(',');
    const useBorder = pictureGalleryElements[i].getAttribute('useBorder');

    return `
        <div class="container">
            <div class="slideContainer">
                <button onclick='changePictureIndex(${i}, -1, ${data.length})'>&lt;</button>
                <a class="singlePictureContainer" href="${data[pictureGallerySlideNum[i]]}">
                    <img class="${useBorder ? 'picture border' : 'picture'}" src="${data[pictureGallerySlideNum[i]]}">
                </a>
                <button onclick='changePictureIndex(${i}, 1, ${data.length})'>&gt;</button>
            </div>
        </div>
    `;
}
