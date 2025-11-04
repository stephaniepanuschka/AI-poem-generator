alert("Hello World");
console.log("JS file loaded successfully");

function displayPoem(response) {

 new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  console.log(" generatePoem() triggered");


let apiKey = "0918e26t24fa3e41afd9f8649o1cbb80";
let prompt = `Generate a poem about ${instructionsInput.value}`;
let context = "You are a poem expert and loves to write short poems. Ideally, your goal is to generate a 6 line poem in basic HTML and seperate each line with a <br />. Make sure to fowllow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="generating">⏳ Generating a poem about ${instructionsInput.value}</div>`; 

axios.get(apiUrl).then(displayPoem);

}

let poemFormElement = document.querySelector("#poem-generator-form");
let instructionsInput = document.querySelector("#user-instructions"); 
poemFormElement.addEventListener("submit", generatePoem);
console.log("Event listener attached to form");