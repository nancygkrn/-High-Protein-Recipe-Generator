function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 5,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault(); // stop the page reload
  // validate and send the data with fetch instead

  //build the API call
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "e03ob0et84a38962c5d755f245f03b49";
  let prompt = `User instructions: Generate a high protein recipe about ${instructionsInput.value}`;
  let context =
    "You are a high protein diet consumer and love to write short recipes. You mission is to generate a 4 line recipe in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the recipe. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");

  //Make a call to the api
  axios.get(apiURL).then(displayRecipe);
  //Display the recipe
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
