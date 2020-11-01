const menuPageLoad = () => {
    let contentDiv = document.getElementById('content');
    let menuImage = document.createElement('img')
    menuImage.setAttribute('src','https://astana.restolife.kz/upload/information_system_26/5/4/0/group_5400/information_groups_property_12382.jpg') 
    contentDiv.appendChild(menuImage)
}

export {menuPageLoad}