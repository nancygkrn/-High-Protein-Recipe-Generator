function generateRecipe(event) {
  event.preventDefault(); // stop the page reload
  // validate and send the data with fetch instead

  new Typewriter("#recipe", {
    strings: "Garlic, Chicken and brocoli",
    autoStart: true,
    delay: 5,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
