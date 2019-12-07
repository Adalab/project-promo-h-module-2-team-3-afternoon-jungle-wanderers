'use strict';

const reseterButton = document.querySelector('#buttonReset');

const resetLocalStorage = () => {
  localStorage.clear('palette');
  localStorage.clear('font');
  localStorage.clear('name');
  localStorage.clear('job');
  localStorage.clear('image');
  localStorage.clear('phone');
  localStorage.clear('email');
  localStorage.clear('linkedin');
  localStorage.clear('github');
};

const resetColorPalette = () => {
  applyPalette1();
  palette1.checked = true;
};
const resetFont = () => {
  applyFont1();
  font1.checked = true;
};

const resetName = () => {
  previewCardName.innerHTML = 'Nombre Apellido';
  userName.value = '';
};

const resetJob = () => {
  previewCardJob.innerHTML = 'Front-end developer';
  userJob.value = '';
};

const resetImage = () => {
  profileImage.style.backgroundImage = `url(${defaultImage})`;
  profilePreview.style.backgroundImage = `url(${defaultImage})`;
};

const resetPhone = () => {
  phoneIcon.href = '';
  userTel.value = '';
  phoneItem.classList.add('opacity');
};

const resetEmail = () => {
  emailIcon.href = '';
  userEmail.value = '';
  emailItem.classList.add('opacity');
};

const resetLinkedin = () => {
  linkedinIcon.href = '';
  userLinkedin.value = '';
  linkedinItem.classList.add('opacity');
};

const resetGithub = () => {
  githubIcon.href = '';
  userGithub.value = '';
  githubItem.classList.add('opacity');
};

const resetCardData = () => {
  resetLocalStorage();
  resetColorPalette();
  resetFont();
  resetName();
  resetJob();
  resetImage();
  resetPhone();
  resetEmail();
  resetLinkedin();
  resetGithub();
};

reseterButton.addEventListener('click', resetCardData);