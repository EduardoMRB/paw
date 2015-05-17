(function (document) {
  function isInputValid(input) {
    return input.value !== "";
  }

  function validateInput(e) {
    let input = e.target;

    if (isInputValid(input)) {
      input.classList.remove("error");
      input.classList.add("success");
    } else {
      input.classList.add("error");
      input.classList.remove("success");
    }
  }

  // Extends NodeList prototype so we can call forEach on formInputs
  NodeList.prototype.forEach = Array.prototype.forEach;

  let formInputs = document.querySelectorAll(".control-group input[type=text]");
  formInputs.forEach(i => i.addEventListener("blur", validateInput));
}(document));
