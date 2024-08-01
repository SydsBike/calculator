import { allClearHandler } from "./module.js";

const numbers = document.querySelectorAll("[data-number]");
const allClear = document.querySelector("[data-clear]");
const currentDisplay = document.querySelector("[data-current]");
const previousDisplay = document.querySelector("[data-previous]");
const operators = document.querySelectorAll("[data-operator]");

class Calculator {
  constructor(currentDisplayText, previousDisplayText) {
    this.currentDisplayText = currentDisplayText;
    this.previousDisplayText = previousDisplayText;
  }

  clear() {
    this.currentDisplayText = "";
    this.previousDisplayText = "";
    this.operation = undefined;
  }
  appendNumber(num) {
    this.currentDisplayText = this.currentDisplayText += num;
  }

  updateDisplay() {
    currentDisplay.innerText = this.currentDisplayText;
    previousDisplay.innerText = this.previousDisplayText;
  }
}

export let calculator = new Calculator(currentDisplay, previousDisplay);

allClear.addEventListener("click", allClearHandler);

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    calculator.appendNumber(num.innerText);
    calculator.updateDisplay();
  });
});
