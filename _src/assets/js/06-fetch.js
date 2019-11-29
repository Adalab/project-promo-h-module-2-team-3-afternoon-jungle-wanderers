'use strict'

function sendForm(event) {
  event.preventDefault();

  //creo json
  const datos = {
    "palette": paletteChosen,
    "name": userName.value,
    "job": userJob.value,
    "phone": userTel.value,
    "email": userEmail.value,
    "linkedin": userLinkedin.value,
    "github": userGithub.value,
    "photo": fr.result,
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
  if (data.success) {
    twitterURL.innerHTML = `<a class="twitter-url" href=${data.cardURL} target="_blank">${data.cardURL}</a>`;
    twitterMessage.insertAdjacentElement('afterend', twitterURL);
    shareTwitter(data.cardURL);
    console.log(data.cardURL)
  } else {
    twitterURL.innerHTML = 'ERROR' + data.error;
  }
}
function shareTwitter(url) {
  const twitterText = encodeURIComponent('He creado esta tarjeta con Awesome Profile Cards. ¡Échale un vastazo!');
  const twitterHashtag = encodeURIComponent('adalab,adalaber,frontEnd,awesomeCards');
  const twitterLink = `https://twitter.com/intent/tweet?text=${url}`;
  twitterBtn.href = `https://twitter.com/intent/tweet?text=${twitterText}&url=${url}&hashtags=${twitterHashtag}`;
}

createCardButton.addEventListener('click', sendForm);