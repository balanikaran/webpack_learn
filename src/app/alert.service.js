import { inputsAreValid } from "./utils/inputsAreValid";

class AlertService {
  constructor() {
    this.errorBox = document.getElementById("error");
  }

  handleAdditionError(inputs, numbers) {
    console.log("i was called");
    const fullMessage = inputs.reduce((message, str, index) => {
      if (inputsAreValid(numbers[index])) {
        return message + "";
      } else {
        return message + `${str} is not a number`;
      }
    }, "Please enter two valid numbers!");

    this.errorBox.classList.remove("invisible");
    this.errorBox.innerText = fullMessage;
  }

  hideErrors() {
    console.log(" i ran");
    console.log(this.errorBox);
    this.errorBox.classList.add("invisible");
  }
}

export default AlertService;
