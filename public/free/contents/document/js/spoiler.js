const spoilerElements = document.getElementsByClassName('spoiler');

for (let i = 0; i < spoilerElements.length; i++) {
    const item = spoilerElements[i].getAttribute('item');
    const children = spoilerElements[i].innerHTML;

    spoilerElements[i].innerHTML = `
        <button class="spoilerItem" onclick='toggleSpoiler(${i})'>
            <span class="rightArrow"></span>${item}
        </button>
        <div class="spoilerContent">
            ${children}
        </div>
    `;
}

function toggleSpoiler(i) {
    spoilerElements[i].classList.toggle('isOpen');
}
