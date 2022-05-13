const informationCardElements = document.getElementsByClassName('informationCard');

for (let i = 0; i < informationCardElements.length; i++) {
    const icon = informationCardElements[i].getAttribute('icon');
    const mainTitle = informationCardElements[i].getAttribute('mainTitle');
    const subTitle = informationCardElements[i].getAttribute('subTitle');
    const children = informationCardElements[i].innerHTML;

    let iconElement = '';
    if (icon) iconElement = `
        <div class="icon">
            <img src="${icon}" />
        </div>
    `;

    let mainTitleElement = '';
    if (mainTitle) mainTitleElement = `<div class="mainTitle">${mainTitle}</div>`;

    let subTitleElement = '';
    if (subTitle) {
        if (subTitle.startsWith('https://') || subTitle.startsWith('http://')) {
            subTitleElement = `
                <div class="subTitle">
                    <a href="${subTitle}" target="_blank" rel="noreferrer">${subTitle}</a>
                </div>
            `;
        } else {
            subTitleElement = `<div class="subTitle">${subTitle}</div>`;
        }
    }

    informationCardElements[i].innerHTML = `
        <div class="head">
            ${iconElement}
            <div>
                ${mainTitleElement}
                ${subTitleElement}
            </div>
        </div>
        <div class="main">
            ${children}
        </div>
    `;
}
