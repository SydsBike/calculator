const numbers = document.querySelectorAll("[data-number]");
const allClear = document.querySelector("[data-clear]");
const current = document.querySelector("[data-current]");
const previous = document.querySelector("[data-previous]");
const operators = document.querySelectorAll("[data-operator]");

class Calculator {
  constructor(current, previous) {
    this.current = current;
    this.previous = previous;
  }

  clear() {
    this.current = "";
    this.previous = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumbers(num) {
    this.current = current.innerText += num.innerText;

    console.log(num.innerText);
  }

  calculate() {}

  updateDisplay() {
    current.innerText = this.current;
    previous.innerText = this.previous;
  }
}

const calculator = new Calculator(current, previous);

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    calculator.appendNumbers(num);
    calculator.updateDisplay();
  });
});

allClear.addEventListener("click", () => {
  //calculator.clear();
  //calculator.updateDisplay();
  calculator.clear();
  calculator.updateDisplay();
});

console.log(numbers);
