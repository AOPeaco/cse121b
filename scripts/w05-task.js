/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector("#temples");
let templesList = [];

/* async displayTemples Function */

const displayTemples = (x) => {
    x.forEach(element => {
        let art = document.createElement("article");

        let name = document.createElement("h3");
        name.textContent = `${element.templeName}`;

        let image = document.createElement("img");
        image.setAttribute("src", element.imageUrl);
        image.setAttribute("alt", element.location);

        art.appendChild(name);
        art.appendChild(image);

        templesElement.appendChild(art);

    });
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {

        templesList = await response.json();
        displayTemples(templesList);
    }
}

/* reset Function */

function reset() {
    templesElement.innerHTML = "";
}

/* filterTemples Function */

function filterTemples(temples) {
    reset();
    let filter = document.getElementById("filtered").value;

    switch (filter) {
        case "utah":

            let utahTemples = temples.filter(temple => temple.location.includes("Utah"));
            displayTemples(utahTemples);
            break;

        case "notutah":

            let otherTemples = temples.filter(temple => !temple.location.includes("Utah"));
            displayTemples(otherTemples);
            break;

        case "older":

        //Don't know how to write this one, so I'm skipping over it for now.

        case "all":

            displayTemples(temples);
            break;

    }
}

getTemples();

/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templesList) });