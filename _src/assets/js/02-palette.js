'use strict';

//COLORS

function getPalette() {
    if (localStorage.getItem('palette')) {
        paletteChosen = localStorage.getItem('palette');
        if (paletteChosen === '1') {
            palette1.setAttribute('checked', true);
        } else if (paletteChosen === '2') {
            palette2.setAttribute('checked', true);
        } else {
            palette3.setAttribute('checked', true);
        }
        applyPalette();
    }
    else {
        palette1.setAttribute('checked', true);
        applyPalette();
    }
}
function choosePalette() {
    paletteChosen = event.currentTarget.value;
    localStorage.setItem('palette', paletteChosen);
    applyPalette();
}

function applyPalette() {
    if (palette1.checked) {
        applyPalette1()
    } else if (palette2.checked) {
        applyPalette2()
    } else if (palette3.checked) {
        applyPalette3()
    }
}

palette1.addEventListener('click', choosePalette)
palette2.addEventListener('click', choosePalette)
palette3.addEventListener('click', choosePalette)

function applyPalette1() {
    previewCardName.classList.add('darkGreenBlue');
    previewCardName.classList.remove('driedBlood', 'slate');
    previewCardHead.classList.add('borderPalette1');
    previewCardHead.classList.remove('borderPalette2', 'borderPalette3');
    for (const iconItem of iconItems) {
        iconItem.classList.add('darkGreenBlue');
        iconItem.classList.remove('driedBlood', 'slate');
    }
    for (const IconButton of iconButtons) {
        IconButton.style.borderColor = '#a2deaf';
    }
}

function applyPalette2() {
    previewCardName.classList.add('driedBlood');
    previewCardName.classList.remove('darkGreenBlue', 'slate');
    previewCardHead.classList.add('borderPalette2');
    previewCardHead.classList.remove('borderPalette1', 'borderPalette3');
    for (const iconItem of iconItems) {
        iconItem.classList.add('driedBlood');
        iconItem.classList.remove('darkGreenBlue', 'slate');
    }
    for (const IconButton of iconButtons) {
        IconButton.style.borderColor = '#e95626';
    }
}

function applyPalette3() {
    previewCardName.classList.add('slate');
    previewCardName.classList.remove('driedBlood', 'darkGreenBlue');
    previewCardHead.classList.add('borderPalette3');
    previewCardHead.classList.remove('borderPalette1', 'borderPalette2');
    for (const iconItem of iconItems) {
        iconItem.classList.add('slate');
        iconItem.classList.remove('driedBlood', 'darkGreenBlue');
    }
    for (const IconButton of iconButtons) {
        IconButton.style.borderColor = '#a0c0cf';
    }
}

