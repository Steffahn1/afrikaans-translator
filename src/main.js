import { translateText, loadModel } from "./Translator";

const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("translate-btn" );
const outputEl = document.getElementById("output");


async function setup() {
  outputEl.textContent = "Loading model...";

  try {
    await loadModel((p) => console.log(p));
    outputEl.textContent = "Ready! Type something and Press Translate.."
    buttonEl.disabled = false;
  } catch (error) {
    console.error(error);
    outputEl.textContent = "Failed to load the model.."
  }

}

setup();


async function handleClick() {
  //logic that should happen when the button is clicked...
  const inputContent = inputEl.value.trim();
  if (!inputContent) {
    outputEl.textContent = "Please type something to translate";
    return;
  }

  buttonEl.disabled = true;
  outputEl.textContent = "Translating..";

  try {
    outputEl.textContent = await translateText(inputContent);
  } catch (error) {
    console.error(error);
    outputEl.textContent = "Something went wrong whilst translating...";
  } finally {
    buttonEl.disabled = false;
  }


}


//add event listner to the button

buttonEl.addEventListener('click', handleClick);
