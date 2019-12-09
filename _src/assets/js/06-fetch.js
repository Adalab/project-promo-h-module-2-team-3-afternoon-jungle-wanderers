'use strict';

let photoSend = '';

function checkFilledInputs() {
  
  if (nameValidation() === false || jobValidation() === false || emailValidation() === false || userLinkedin.value === '' || userGithub.value === '') {
    createCardButton.disabled = true;
    errorMessage.classList.remove('hidden');

  } else {
    createCardButton.disabled = false;
    errorMessage.classList.add('hidden');
  }
  
}
function sendForm(event) {
  event.preventDefault();

  if (!fr.result && !localStorage.getItem('image')){
    photoSend = defaultImage;
  }
  else if (!fr.result && localStorage.getItem('image')){
    photoSend = localStorage.getItem('image');
  }
  else {
    photoSend = fr.result;
    localStorage.setItem('image',photoSend );
  }
  //creo json
  const datos = {
    "palette": paletteChosen,
    "font": fontChosen,
    "name": userName.value,
    "job": userJob.value,
    "phone": userTel.value,
    "email": userEmail.value,
    "linkedin": userLinkedin.value,
    "github": userGithub.value,
    "photo": photoSend,
  };
  //petición
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(response => response.json())
    .then(data => showURL(data))
    .catch(function (error) { console.log(error); });
}
function showURL(data) {
  const twitterURL = document.createElement('span');
  twitterURL.style.textAlign = 'center';
  if (data.success) {
    twitterURL.innerHTML = `<a class="twitter-url" href=${data.cardURL} style="color:#e17334" target="_blank">${data.cardURL}</a>`;
    twitterMessage.insertAdjacentElement('afterend', twitterURL);
    twitterContainer.classList.remove('hidden');
    createCardButton.setAttribute('disabled', true);
    shareTwitter(data.cardURL);
  } else {
    twitterURL.innerHTML = 'ERROR' + data.error;
  }
}
function shareTwitter(url) {
  const twitterText = encodeURIComponent('He creado esta tarjeta con Awesome Profile Cards. ¡Échale un vistazo!');
  const twitterHashtag = encodeURIComponent('adalab,adalaber,frontEnd,awesomeCards');
  twitterBtn.href = `https://twitter.com/intent/tweet?text=${twitterText}&url=${url}&hashtags=${twitterHashtag}`;
  linkedInBtn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
}

createCardButton.addEventListener('click', sendForm);