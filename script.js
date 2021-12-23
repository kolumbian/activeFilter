let doc = document;

let filterContainer = doc.querySelector('.filterContainer');

let languageFilters = [
    'Russian Filter',
    'English Filter',
    'Spyware Filter',
    'Social media',
    'Spanish/Portuguese Filter',
    'Deutsch Filter',
    'Japanese Filter',
    'Dutch Filter',
    'Turkish Filter',
    'Annoyances Filter',
    'Chinese Filter',
    'Czech/Slovak Filter',
    'French Filter',
    'Polish Filter',
    'African Filter',
    'Indian Filter',
    'Korean Filter',
];

let shortLanguage = [
    '-ru',
    '-eu',
    '-analysts',
    '-social',
    '-is-pr',
    '-gu',
    '-jp',
    '-gl',
    '-tr',
    '-stimulus',
    '-kt',
    '-cz-sk',
    '-fr',
    '-pl',
    '-af',
    '-in',
    '-kr',
];

function addFilterBlocks() {
    for (let i = 0; i < languageFilters.length; i++) {
        filterContainer.insertAdjacentHTML('beforeend',`<div class="filterBlock"> <div class="filterName">${languageFilters[i]} <div class="banner${shortLanguage[i]}_adlock"></div></div> <div class="switchBox${shortLanguage[i]}"> <div class="switchCircle"></div> <div class="switchBackground"></div> </div> </div>`);
    }
}

function isNotVisible(el) {return el.offsetWidth === 0;}

function toggleSwitch() {
    for ( let i = 0; i < shortLanguage.length; i++) {
        
        let switchBox = doc.querySelector(`.switchBox${shortLanguage[i]}`);
        let bannerBlock = doc.querySelector(`.banner${shortLanguage[i]}_adlock`);

        if (isNotVisible(bannerBlock)) {
            switchBox.classList.add('active');
        }
    }
}

document.addEventListener('DOMContentLoaded', addFilterBlocks);
document.addEventListener('DOMContentLoaded', toggleSwitch);