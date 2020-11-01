const contactPageLoad = () => {
    let contentDiv = document.getElementById('content');

    let contactImage = document.createElement('img')
    contactImage.setAttribute('src','https://www.ipcaweb.org/images/IPC_Contact_Us.jpg');
    contactImage.setAttribute('id','contactImage')
    contentDiv.appendChild(contactImage)

    let highVille = document.createElement('div')
    highVille.setAttribute('id', 'highVilleContact')
    let highVilleText = document.createElement('p')
    highVilleText.setAttribute('class', 'contactText')
    let highVillePhone = document.createElement('p')
    highVilleText.textContent = 'Baitursynova 5/1'
    highVillePhone.textContent = '+7 707 4534 922'
    highVille.appendChild(highVilleText)
    highVille.appendChild(highVillePhone)
    contentDiv.appendChild(highVille)

    let expo = document.createElement('div')
    expo.setAttribute('id', 'expoContact')
    let expoText = document.createElement('p')
    expoText.setAttribute('class', 'contactText')
    let expoPhone = document.createElement('p')
    expoText.textContent = 'Expo Boulevard 44/7'
    expoPhone.textContent = '+7 707 4433 212'
    expo.appendChild(expoText)
    expo.appendChild(expoPhone)
    contentDiv.appendChild(expo)
}

export {contactPageLoad}