/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector("#temples");
const templesList = [];

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

        const templesData = await response.json();
        displayTemples(templesData);
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

            displayTemples(temples.filter(temple => temple.location.toLowerCase().includes("utah")));
            break;

        case "notutah":

            displayTemples(temples.filter(temple => temple.location.toLowerCase().excludes("utah")));
            break;


    }
}

getTemples();

/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templesList) });