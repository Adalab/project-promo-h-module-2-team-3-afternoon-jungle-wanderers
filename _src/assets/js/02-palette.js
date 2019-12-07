'use strict';

//COLORS

function getPalette() {
  if (localStorage.getItem('palette')) {
    paletteChosen = localStorage.getItem('palette');
    if (paletteChosen === '1') {
      palette1.setAttribute('checked', true);
    } else if (paletteChosen === '2') {
      palette2.setAttribute('checked', true);
    } else if (paletteChosen === '3') {
      palette3.setAttribute('checked', true);
    } else if (paletteChosen === '4'){
      palette4.setAttribute('checked', true);
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
    applyPalette1();
  } else if (palette2.checked) {
    applyPalette2();
  } else if (palette3.checked) {
    applyPalette3();
  }else if (palette4.checked) {
    applyPalette4();
  }
}

palette1.addEventListener('click', choosePalette);
palette2.addEventListener('click', choosePalette);
palette3.addEventListener('click', choosePalette);
palette4.addEventListener('click', choosePalette);


function applyPalette1() {
  previewCardName.classList.add('darkGreenBlue');
  previewCardName.classList.remove('driedBlood', 'slate', 'jungleGreen');
  previewCardHead.classList.add('borderPalette1');
  previewCardHead.classList.remove('borderPalette2', 'borderPalette3', 'borderPalette4');
  for (const iconItem of iconItems) {
    iconItem.classList.add('darkGreenBlue');
    iconItem.classList.remove('driedBlood', 'slate', 'jungleGreen');
  }
  for (const IconButton of iconButtons) {
    IconButton.style.borderColor = '#a2deaf';
  }
}

function applyPalette2() {
  previewCardName.classList.add('driedBlood');
  previewCardName.classList.remove('darkGreenBlue', 'slate', 'jungleGreen');
  previewCardHead.classList.add('borderPalette2');
  previewCardHead.classList.remove('borderPalette1', 'borderPalette3', 'borderPalette4');
  for (const iconItem of iconItems) {
    iconItem.classList.add('driedBlood');
    iconItem.classList.remove('darkGreenBlue', 'slate', 'jungleGreen');
  }
  for (const IconButton of iconButtons) {
    IconButton.style.borderColor = '#e95626';
  }
}

function applyPalette3() {
  previewCardName.classList.add('slate');
  previewCardName.classList.remove('driedBlood', 'darkGreenBlue', 'jungleGreen');
  previewCardHead.classList.add('borderPalette3');
  previewCardHead.classList.remove('borderPalette1', 'borderPalette2', 'borderPalette4');
  for (const iconItem of iconItems) {
    iconItem.classList.add('slate');
    iconItem.classList.remove('driedBlood', 'darkGreenBlue', 'jungleGreen');
  }
  for (const IconButton of iconButtons) {
    IconButton.style.borderColor = '#a0c0cf';
  }
}
function applyPalette4() {
  previewCardName.classList.add('jungleGreen');
  previewCardName.classList.remove('darkGreenBlue', 'driedBlood', 'slate');
  previewCardHead.classList.add('borderPalette4');
  previewCardHead.classList.remove('borderPalette1', 'borderPalette2', 'borderPalette3');
  for (const iconItem of iconItems) {
    iconItem.classList.add('jungleGreen');
    iconItem.classList.remove('darkGreenBlue', 'driedBlood', 'slate');
  }
  for (const IconButton of iconButtons) {
    IconButton.style.borderColor = '#f15f06';
  }
}

//FONTS

function getFont() {
  if (localStorage.getItem('font')) {
    fontChosen = localStorage.getItem('font');
    if (fontChosen === '1') {
      font1.setAttribute('checked', true);
    } else if (fontChosen === '2') {
      font2.setAttribute('checked', true);
    } else if (fontChosen === '3') {
      font3.setAttribute('checked', true);
    }
    applyFont();
  }
  else {
    font1.setAttribute('checked', true);
    applyFont();
  }
}
const chooseFont = (event) => {
  fontChosen = event.currentTarget.value;
  localStorage.setItem('font', fontChosen);
  applyFont();
};
const applyFont = () =>{
  if (font1.checked){
    applyFont1();
  }else if (font2.checked){
    applyFont2();
  }else {
    applyFont3();
  }
};
const applyFont1 = () => {
  previewCardName.classList.add('fontMontserratBold');
  previewCardName.classList.remove('fontCherrySwashBold', 'fontKalamBold');
  previewCardJob.classList.add('fontMontserratRegular');
  previewCardJob.classList.remove('fontCherrySwashRegular', 'fontKalamRegular');
};
const applyFont2 = () => {
  previewCardName.classList.add('fontCherrySwashBold');
  previewCardName.classList.remove('fontMontserratBold', 'fontKalamBold');
  previewCardJob.classList.add('fontCherrySwashRegular');
  previewCardJob.classList.remove('fontMontserratRegular', 'fontKalamRegular');
};
const applyFont3 = () => {
  previewCardName.classList.add('fontKalamBold');
  previewCardName.classList.remove('fontMontserratBold', 'fontCherrySwashBold');
  previewCardJob.classList.add('fontKalamRegular');
  previewCardJob.classList.remove('fontMontserratRegular', 'fontCherrySwashRegular');
};
font1.addEventListener('click', chooseFont);
font2.addEventListener('click', chooseFont);
font3.addEventListener('click', chooseFont);