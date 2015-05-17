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

  function validateForm(formInputs) {
    return e => {
      let submitButton = document.querySelector("#submit-btn");
      validateInput(e);

      if (canSubmitform(formInputs)) {
        submitButton.classList.remove("disabled");
      } else {
        submitButton.classList.add("disabled");
      }
    }
  }

  function canSubmitform(formInputs) {
    return formInputs.every(i => i.classList.contains("success"));
  }

  // Transform NodeList into an Array to use it's prototype functions
  let formInputs = Array.prototype.slice.call(
    document.querySelectorAll(".control-group input[type=text]")
  );
  formInputs.forEach(i => i.addEventListener("blur", validateForm(formInputs)));
}(document));
