let doc = document;

let filterContainer = doc.querySelector('.filterContainer');

const languageFilters = {
    'Russian Filter': '-ru',
    'English Filter': '-eu',
    'Spyware Filter': '-analysts',
    'Social media': '-social',
    'Spanish/Portuguese Filter': '-is-pr',
    'Deutsch Filter': '-gu',
    'Japanese Filter': '-jp',
    'Dutch Filter': '-gl',
    'Turkish Filter': '-tr',
    'Annoyances Filter': '-stimulus',
    'Chinese Filter': '-kt',
    'Czech/Slovak Filter': '-cz-sk',
    'French Filter': '-fr',
    'Polish Filter': '-pl',
    'African Filter': '-af',
    'Indian Filter': '-in',
    'Korean Filter': '-kr',
};

function isNotVisible(el) {return el.offsetWidth === 0;}

function addAndCheck() {
    for (let i in languageFilters) {
        filterContainer.insertAdjacentHTML('beforeend',`<div class="filterBlock"> <div class="filterName">${(i)} <div class="banner${languageFilters[i]}_adlock"></div></div> <div class="switchBox${languageFilters[i]}"> <div class="switchCircle"></div> <div class="switchBackground"></div> </div> </div>`);

        let switchBox = doc.querySelector(`.switchBox${languageFilters[i]}`);
        let bannerBlock = doc.querySelector(`.banner${languageFilters[i]}_adlock`);

        if (isNotVisible(bannerBlock)) {
            switchBox.classList.add('active');
        }
    }
}

document.addEventListener('DOMContentLoaded', addAndCheck);