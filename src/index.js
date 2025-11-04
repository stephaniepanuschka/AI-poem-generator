
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
let context = "You are a poem expert who writes short poems. Generate a 4-line poem and format it using actual HTML <br> tags (not escaped or described). Do not include the word 'html' anywhere in the output. Sign the poem at the end inside a <strong> element with 'SheCodes AI'. Do not include a title.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="generating">⏳ Generating a poem about ${instructionsInput.value}</div>`; 

axios.get(apiUrl).then(displayPoem);

}

let poemFormElement = document.querySelector("#poem-generator-form");
let instructionsInput = document.querySelector("#user-instructions"); 
poemFormElement.addEventListener("submit", generatePoem);
