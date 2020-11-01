import {homePageLoad} from './homepageload.js';
import {menuPageLoad} from './menupageload.js';
import {contactPageLoad} from './contactspageload.js'
//import two other functions from two modules

const homeTab = document.getElementById('homeTab');
const menuTab = document.getElementById('menuTab');
const contactsTab = document.getElementById('contactsTab');
let contentDiv = document.getElementById('content')
homePageLoad();

const clearDiv = () => {
    contentDiv.textContent = '';
}

//when tab clicked, delete content from div
//repopulate div with appropriate content

homeTab.addEventListener('click', function(){
    clearDiv();
    homePageLoad();
})

menuTab.addEventListener('click', function(){
    clearDiv();
    menuPageLoad();
})

contactsTab.addEventListener('click', function(){
    clearDiv();
    contactPageLoad();
})