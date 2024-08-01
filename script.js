import { allClearHandler } from "./module.js";

const numbers = document.querySelectorAll("[data-number]");
const allClear = document.querySelector("[data-clear]");
const currentDisplay = document.querySelector("[data-current]");
const previousDisplay = document.querySelector("[data-previous]");
const operators = document.querySelectorAll("[data-operator]");
const equals = document.querySelector("[data-equal]");

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

  delete() {}

  appendNumber(num) {
    if (num === "." && this.currentDisplayText.includes(".")) {
      return;
    } else {
      this.currentDisplayText =
        this.currentDisplayText.toString() + num.toString();
    }
  }
  chooseOperation(operation) {
    if (this.currentDisplayText === "") return;
    if (this.previousDisplayText !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousDisplayText = this.currentDisplayText;
    this.currentDisplayText = "";
  }

  compute() {
    let compute;
    const prev = parseFloat(this.previousDisplayText);
    const current = parseFloat(this.currentDisplayText);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "÷":
        compute = prev / current;
        break;
      case "*":
        compute = prev * current;
        break;
      case "+":
        compute = prev + current;
        break;
      case "-":
        compute = prev - current;
        break;
    }
    this.previousDisplayText = compute.toString();
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
operators.forEach((ops) => {
  ops.addEventListener("click", () => {
    calculator.chooseOperation(ops.innerText);
    calculator.updateDisplay();
  });
});

equals.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});
