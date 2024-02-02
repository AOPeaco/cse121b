/* LESSON 4 - Programming Tasks */

let myProfile = {
    name: "Andrew Peacock",
    photo: "images/selfPortrait.png",
    favoriteFoods: ["Pizza", "Burritos", "Noodles", "Sandwiches", "Spicy foods"],
    hobbies: ["Video Games", "Reading", "Quality time with family", "Playing with pets"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Highland, Utah",
        length: "19 Years"
    }
);

myProfile.placesLived.push(
    {
        place: "Mapleton, Utah",
        length: "1 Year"
    }
);

myProfile.placesLived.push(
    {
        place: "Alpine, Utah",
        length: "3 years"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
const placesElement = document.querySelector("#places-lived")

function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
}

function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

placesElement.innerHTML = generateListMarkup(
    myProfile.placesLived,
    placesTemplate
);

