'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//selecting element
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

//selecting
const header = document.querySelector('.header');
const allSection = document.querySelectorAll('section');
console.log(allSection);

document.getElementById('section--1');
const allButton = document.getElementsByTagName('button');
console.log(allButton);
console.log(document.getElementsByName('btn'));
//creating
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'give me cookiees<button class="btn--close-cookie">got it</button>';

header.prepend(message);
header.append(message);

//deleting element
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//style
