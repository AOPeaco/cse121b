/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Andrew Peacock';
let currentYear = new Date().getFullYear();
let profilePicture = 'images/selfPortrait.png';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image for ${fullName}`);

/* Step 5 - Array */

let favFood = ['Burrito', 'Pizza', 'Noodles'];
foodElement.innerHTML = `${favFood}`;
let otherFood = favFood.push('Steak');
foodElement.innerHTML += `<br>${favFood}`;
let firstFood = favFood.shift();
foodElement.innerHTML += `<br>${favFood}`;
let lastFood = favFood.pop();
foodElement.innerHTML += `<br>${favFood}`;
