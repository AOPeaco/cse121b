// CSE121B Project
// Basically what I want to do here is take the button in the html file and give it two different functions
// based on what drop down option there is, and reset each time the button is pressed.

async function getData(apiType) {
    let apiURL;

    // This tells the program what two API's we are retrieving for our drop down list
    if (apiType === "joke") {
        apiURL = "https://geek-jokes.sameerkumar.website/api?format=json";
    } else if (apiType === "trivia") {
        apiURL = "https://opentdb.com/api.php?amount=40&type=boolean";
    } else {
        return;
    }

    // This will tell the program what we are grabbing from each API when it is selected.
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        if (apiType === "joke") {
            const jokeResponse = data.joke;
            alert(jokeResponse);
        } else if (apiType === "trivia") {
            // Out of this particular API, there's a multitude of keys that I can pick from such as "difficulty", "category", "type", etc.
            // But for my purposes, I only need the "question" key.
            const triviaArray = data.results.map(result => result.question);

            // This is making it so I can get a random question out of the 40 possible generated from the api.
            randomIndex = Math.floor(Math.random() * triviaArray.length);

            let triviaResponse = triviaArray[randomIndex];
            alert(triviaResponse);
        }

    } catch (error) {
        alert(error);
    }
}

// This is to fetch the selected api based on which is selected - at least, that is the intended function.
function getDataFromSelected() {
    const apiSelector = document.getElementById("apiSelector");
    const selectedAPI = apiSelector.value;

    if (selectedAPI) {
        getData(selectedAPI);
    } else {
        alert("Please make a selection");
    }
}