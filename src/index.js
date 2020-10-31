import {homePageLoad} from './homepageload.js';
//import two other functions from two modules

const homeTab = document.getElementById('homeTab');
const menuTab = document.getElementById('menuTab');
const contactsTab = document.getElementById('contactsTab');
homePageLoad();

//when tab clicked, delete content from div
//repopulate div with appropriate content

homeTab.addEventListener('click', function(){
    alert('home')
})

menuTab.addEventListener('click', function(){
    alert('menu')
})

contactsTab.addEventListener('click', function(){
    alert('contacts')
})