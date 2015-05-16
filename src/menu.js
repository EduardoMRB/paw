(function (document) {
  // Detect scrolling.
  document.addEventListener("scroll", e => {
    let body = document.querySelector("body");
    let bodyPosition = body.scrollTop;
    let navbar = document.querySelector("#navbar");

    if (bodyPosition != 0) {
      // User is scrolling. Contract navbar
      navbar.classList.add("contract");
    } else {
      navbar.classList.remove("contract");
    }
  });
}(document));
