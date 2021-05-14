'use strict';
//Displaying Cookies Content
const cookieContainer = document.querySelector('.cookie_container');
const acceptBtn = document.querySelector('#accept_cookie');
const rejectBtn = document.querySelector('#reject_cookie');

acceptBtn.addEventListener('click', removeCookie);
rejectBtn.addEventListener('click', () => {
  cookieContainer.classList.remove('active_cookie')
});

setTimeout(() => {
  if(!localStorage.getItem('cookieDisplayed'))
  cookieContainer.classList.add('active_cookie')
}, 2000);

function removeCookie() {
  cookieContainer.classList.remove('active_cookie');
  localStorage.setItem('cookieDisplayed', true)
};