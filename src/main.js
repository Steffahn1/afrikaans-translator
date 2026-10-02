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


