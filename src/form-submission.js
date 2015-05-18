(function (document) {
  let form = document.querySelector(".form-wrapper form");
  let formContainer = document.querySelector(".form-wrapper");
  let loadStateContainer = document.querySelector("#load-state");

  // The form wrapper doesn't exist on index.html
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      formContainer.classList.add("hidden");
      loadStateContainer.classList.add("show");
    });
  }
})(document);
