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
            console.log(jokeResponse);
        } else if (apiType === "trivia") {
            // Out of this particular API, there's a multitude of keys that I can pick from such as "difficulty", "category", "type", etc.
            // But for my purposes, I only need the "question" key.
            const triviaResponse = data.question;
            console.log(triviaResponse);
        }

    } catch (error) {
        console.error(error);
    }
}


function getDataFromSelected() {
    const apiSelector = document.getElementById("apiSelector");
    const selectedAPI = apiSelector.value;

    if (selectedAPI) {
        getDataFromSelected(selectedAPI);
    } else {
        console.error("Please make a selection");
    }
}