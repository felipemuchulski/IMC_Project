import { Modal } from "./modal.js";
import { notANumber, calculateIMC } from "./utils.js";
import { AlertError } from "./alert_error.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = event => {
    event.preventDefault();

    const height = inputHeight.value;
    const weight = inputWeight.value;

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if(weightOrHeightIsNotANumber){
      return AlertError.open()
    }

    AlertError.close()

    const result = calculateIMC(weight, height)
    displayMessage(result)

}

function displayMessage(result){
    const message = `O seu IMC é ${result}`;
    
    Modal.message.innerText = message;
    Modal.open();
}

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();