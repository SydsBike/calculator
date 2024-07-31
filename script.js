let numbers = document.querySelectorAll("[data-number]");
let allClear = document.querySelector("[data-ac]");
let current = document.getElementById("current");

class Calculator {
  constructor(currentOp, previousOp) {
    this.currentOp = currentOp;
    this.previousOp = previousOp;
  }

  clear() {
    this.currentOp.innerText = "";
    this.previousOp.innerText = "";
  }
  appendNumbers(num) {
    this.previousOp.innerText = num + this.currentOp.innerText;
    this.currentOp.innerText = num;
  }

  updateDisplay()
}

const calculator = new Calculator(current, previous);

numbers.forEach((num) => {
  num.addEventListener("click", calculator.appendNumbers(num.innerText));
});

allClear.addEventListener("click", calculator.clear);
