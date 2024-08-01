//used event handler for all clear button; clears display to blank;
import { calculator } from "./script.js";

export function allClearHandler() {
  calculator.clear();
  calculator.updateDisplay();
}
