const contactPageLoad = () => {
    let contentDiv = document.getElementById('content');
    let contactImage = document.createElement('img')
    contactImage.setAttribute('src','https://www.ipcaweb.org/images/IPC_Contact_Us.jpg');
    contactImage.setAttribute('id','contactImage')
    contentDiv.appendChild(contactImage)
}

export {contactPageLoad}