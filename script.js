import { allClearHandler } from "./module.js";

const numbers = document.querySelectorAll("[data-number]");
const allClear = document.querySelector("[data-clear]");
const currentDisplay = document.getElementById("current");
const previousDisplay = document.getElementById("previous");
const operators = document.querySelectorAll("[data-operator]");
const equals = document.querySelector("[data-equal]");
const del = document.querySelector("[data-delete]");
const launchBtn = document.querySelector("[data-visible]");
const grid = document.querySelector("[data-grid]");

class Calculator {
  constructor(currentDisplayText, previousDisplayText) {
    this.currentDisplayText = currentDisplayText;
    this.previousDisplayText = previousDisplayText;
    //this.clear();
    //this.updateDisplay();
  }

  clear() {
    this.currentOp = "";
    this.previousOp = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOp = this.currentOp.toString().slice(0, -1);
  }

  appendNumber(num) {
    if (num === "." && this.currentOp.includes(".")) {
      return;
    } else {
      this.currentOp = this.currentOp.toString() + num.toString();
    }
  }
  chooseOperation(operation) {
    if (this.currentOp === "") return;
    if (this.previousOp !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOp = this.currentOp;
    this.currentOp = "";
  }

  compute() {
    let compute;
    const prev = parseFloat(this.previousOp);
    const current = parseFloat(this.currentOp);
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
      default:
        return;
    }
    this.currentOp = compute.toString();
    this.operation = undefined;
    this.previousOp = "";
  }

  getDisplayNumber(num) {
    const stringNumber = num.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentDisplayText.innerText = this.getDisplayNumber(this.currentOp);
    if (this.operation != null) {
      this.previousDisplayText.innerText = `${this.getDisplayNumber(
        this.previousOp
      )} ${this.operation}`;
    } else {
      this.previousDisplayText.innerText = "";
    }
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

del.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
