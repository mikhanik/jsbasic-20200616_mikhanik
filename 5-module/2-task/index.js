function toggleText() {
  const button = document.querySelector(".toggle-text-button");
  const textElement = document.querySelector("#text");

  button.addEventListener("click", function() {
    textElement.toggleAttribute("hidden");
  });
}
