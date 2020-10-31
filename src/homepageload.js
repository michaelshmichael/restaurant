const homePageLoad = () => {

let contentDiv = document.getElementById('content')

let header = document.createElement('h1');
header.textContent = 'Kakao Dak - Finest Korean Cuisine';
header.style = 'font-family: Vampiro One, cursive; font-size: 50px;'

let image = document.createElement('img');
image.setAttribute("src", 'https://weproject.media/upload/medialibrary/cc9/cc9c84c0902181b01e39916304fcf3cb.jpeg');

let blurb = document.createElement('p');
blurb.textContent = 'We put the Seoul into Nur-Seoul-Tan'

contentDiv.appendChild(header);
contentDiv.appendChild(image);
contentDiv.appendChild(blurb);

}

export {homePageLoad}

