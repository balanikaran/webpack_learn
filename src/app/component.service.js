class ComponentService {
  constructor() {
    this.numberOneInput = document.getElementById("numberOne");
    this.numberTwoInput = document.getElementById("numberTwo");
    this.addValuesBtn = document.getElementById("addValues");
    this.resultDiv = document.getElementById("result");
  }

  getInputs() {
    return [this.numberOneInput.value, this.numberTwoInput.value];
  }

  setResult(str) {
    this.resultDiv.innerText = str;
  }

  onClick(callBackFn) {
    this.addValuesBtn.addEventListener("click", callBackFn);
  }
}

export default ComponentService;
