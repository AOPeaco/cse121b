/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Andrew Peacock";
let currentYear = new Date();
let profilePicture = 'C:\Users\Andre\OneDrive\Documents\BYUI Winter 2024\cse121b\images\image0 (8).jpeg';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById("img");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute('alt', `profile image of ${fullName}`);

/* Step 5 - Array */

let favFood = ['Burrito', 'Pizza', 'Noodles'];
foodElement.innerHTML = `${favFood}`;
let otherFood = favFood.push('Steak');
foodElement.innerHTML += `<br>${favFood}`;
let firstFood = favFood.shift();
foodElement.innerHTML += `${favFood}`;
let lastFood = favFood.pop();
foodElement.innerHTML += `${favFood}`;
