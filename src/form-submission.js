(function (document) {
  let form = document.querySelector(".form-wrapper form");
  let formContainer = document.querySelector(".form-wrapper");
  let loadStateContainer = document.querySelector("#load-state");

  form.addEventListener("submit", e => {
    e.preventDefault();
    formContainer.classList.add("hidden");
    loadStateContainer.classList.add("show");
  });
})(document);
