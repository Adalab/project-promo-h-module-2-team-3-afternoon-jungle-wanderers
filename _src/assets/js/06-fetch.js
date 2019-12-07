'use strict';

function sendForm(event) {
  event.preventDefault();

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
    "photo": fr.result,
  };
  console.log(datos);
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
}

createCardButton.addEventListener('click', sendForm);